#!/usr/bin/env node
/**
 * Bumps the package version for the next release, suggesting the bump from the
 * labels of the PRs merged since the current version's tag, the same labels
 * that group the release notes (.github/release.yml):
 *
 *   breaking-change      -> major
 *   enhancement, feature -> minor
 *   anything else        -> patch
 *
 * The suggestion is only a default: any bump or an explicit version can be
 * chosen instead. Then, depending on who is releasing:
 *
 *   PR (default, works for everyone): commits the bump on a new
 *   `release/v<version>` branch. Merging its PR makes release.yml tag the merge
 *   commit and draft the GitHub release.
 *
 *   direct (needs push rights on main): commits the bump on main and tags it
 *   `v<version>`. Pushing the tag makes release.yml draft the GitHub release.
 *
 * Either way, publishing the draft publishes to npm (publish.yml).
 *
 * Deliberately does not push: it prints the commands to run.
 *
 * Usage:  pnpm release:version [major|minor|patch|premajor|preminor|prepatch|prerelease|<version>] [--pr|--direct] [--dry-run]
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline/promises'

const PREID = 'beta'
const BUMPS = ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease']

const args = process.argv.slice(2)
const DRY = args.includes('--dry-run')
const requested = args.find((a) => !a.startsWith('--'))
const requestedPath = args.includes('--direct') ? 'direct' : args.includes('--pr') ? 'pr' : undefined

// Answers are read through the line iterator, which buffers them: with piped
// input every line arrives at once, and `rl.question` would drop the ones that
// arrive before their question is asked. End of input means the default.
let rl
let lines
const ask = async (question) => {
  if (!rl) {
    rl = createInterface({ input: process.stdin })
    lines = rl[Symbol.asyncIterator]()
  }
  process.stdout.write(question)
  const { value, done } = await lines.next()
  return done ? '' : value.trim()
}

const git = (...a) => execFileSync('git', a, { encoding: 'utf8' }).trim()
const run = (...a) => (DRY ? console.log(`  would run: git ${a.join(' ')}`) : git(...a))
const fail = (msg) => {
  console.error(`\n✖ ${msg}\n`)
  process.exit(1)
}

// Version arithmetic, with npm's semantics for prereleases
const parse = (v) => {
  const m = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+)\.(\d+))?$/.exec(v)
  if (!m) fail(`Unsupported version: ${v}`)
  return { major: +m[1], minor: +m[2], patch: +m[3], pre: m[4] ? { id: m[4], n: +m[5] } : null }
}
const inc = (version, bump) => {
  const { major, minor, patch, pre } = parse(version)
  switch (bump) {
    case 'major': return pre && minor === 0 && patch === 0 ? `${major}.0.0` : `${major + 1}.0.0`
    case 'minor': return pre && patch === 0 ? `${major}.${minor}.0` : `${major}.${minor + 1}.0`
    case 'patch': return pre ? `${major}.${minor}.${patch}` : `${major}.${minor}.${patch + 1}`
    case 'premajor': return `${major + 1}.0.0-${PREID}.0`
    case 'preminor': return `${major}.${minor + 1}.0-${PREID}.0`
    case 'prepatch': return `${major}.${minor}.${patch + 1}-${PREID}.0`
    case 'prerelease': return pre ? `${major}.${minor}.${patch}-${pre.id}.${pre.n + 1}` : `${major}.${minor}.${patch + 1}-${PREID}.0`
  }
}

// Preconditions
if (git('status', '--porcelain')) fail('The working tree is not clean: commit or stash first.')
if (git('branch', '--show-current') !== 'main') fail('Run it on main: both release paths start from it.')
git('fetch', '--quiet', '--tags', 'origin', 'main')
if (git('rev-parse', 'HEAD') !== git('rev-parse', 'origin/main')) fail('main is not in sync with origin/main: pull (or push) first.')

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const current = pkg.version
const currentTag = `v${current}`
const tags = git('tag', '--list', 'v*').split('\n').filter(Boolean)
const baseTag = tags.includes(currentTag) ? currentTag : git('describe', '--tags', '--abbrev=0', '--match', 'v*')

// PRs merged after the base tag, from GitHub
let prs = []
try {
  const since = git('log', '-1', '--format=%cI', baseTag)
  const json = execFileSync(
    'gh',
    ['pr', 'list', '--state', 'merged', '--base', 'main', '--search', `merged:>${since}`, '--limit', '200', '--json', 'number,title,labels,mergedAt'],
    { encoding: 'utf8' },
  )
  prs = JSON.parse(json)
    .filter((pr) => pr.mergedAt > since)
    .map((pr) => ({ ...pr, labels: pr.labels.map((l) => l.name) }))
    .filter((pr) => !pr.labels.includes('ignore-for-release'))
    .sort((a, b) => a.number - b.number)
} catch (error) {
  console.warn(`⚠ Could not list merged PRs with gh (${error.message.split('\n')[0]}): no suggestion.`)
}

const has = (pr, ...labels) => labels.some((l) => pr.labels.includes(l))
const suggested = prs.some((pr) => has(pr, 'breaking-change'))
  ? 'major'
  : prs.some((pr) => has(pr, 'enhancement', 'feature'))
    ? 'minor'
    : 'patch'

console.log(`\n@commercelayer/sdk-utils ${current}, PRs merged since ${baseTag}:`)
if (prs.length === 0) console.log('  (none)')
for (const pr of prs) console.log(`  #${pr.number} ${pr.title}${pr.labels.length ? `  [${pr.labels.join(', ')}]` : ''}`)
console.log(`\nSuggested: ${suggested} -> ${inc(current, suggested)}`)

// Choice: from the command line, or asked
let choice = requested
if (!choice) {
  console.log('')
  for (const [i, b] of BUMPS.entries()) console.log(`  ${i + 1}. ${b.padEnd(10)} -> ${inc(current, b)}`)
  const answer = await ask(`\nBump (number, name or version) [${suggested}]: `)
  choice = answer === '' ? suggested : (BUMPS[Number(answer) - 1] ?? answer)
}

const next = BUMPS.includes(choice) ? inc(current, choice) : choice
parse(next)
const tag = `v${next}`
if (tags.includes(tag)) fail(`Tag ${tag} already exists.`)

// Path: through a PR, or straight on main
let path = requestedPath
if (!path) {
  const answer = await ask('Release through a PR, or directly on main (needs push rights)? [pr/direct] (pr): ')
  path = answer === '' ? 'pr' : answer
}
rl?.close()
if (path !== 'pr' && path !== 'direct') fail(`Unknown path: ${path} (expected pr or direct)`)

// Bump and commit
const subject = `chore: bump ${pkg.name} to ${next}`
const releaseBranch = `release/${tag}`
if (path === 'pr') run('switch', '-c', releaseBranch)
if (DRY) console.log(`  would set package.json version: ${current} -> ${next}`)
else writeFileSync('package.json', readFileSync('package.json', 'utf8').replace(`"version": "${current}"`, `"version": "${next}"`))
run('add', 'package.json')
run('commit', '-m', subject)
if (path === 'direct') run('tag', tag)

const done = DRY ? 'Would commit' : 'Committed'
if (path === 'pr') {
  console.log(`\n✔ ${done} on ${releaseBranch}: ${subject}`)
  console.log(`\nNothing pushed. Push and open the PR; merging it tags ${tag} and drafts the release:`)
  console.log(`  git push -u origin ${releaseBranch}`)
  console.log(`  gh pr create --base main --label ignore-for-release --title "Release ${tag}" --body "Bumps ${pkg.name} to ${next}."`)
} else {
  console.log(`\n✔ ${done} on main and ${DRY ? 'would tag' : 'tagged'} ${tag}: ${subject}`)
  console.log('\nNothing pushed. Push main first, then the tag, which drafts the release:')
  console.log('  git push origin main')
  console.log(`  git push origin ${tag}`)
  console.log(`\nIf pushing main is rejected, undo locally and use the PR path instead:`)
  console.log(`  git tag -d ${tag} && git reset --hard origin/main && pnpm release:version --pr`)
}
