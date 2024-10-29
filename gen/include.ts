import { appendFileSync, existsSync, renameSync, unlinkSync, writeFileSync } from 'fs'
import Inflector from './inflector'
import { resolve } from 'path'
import { ResourceTypeLock } from '@commercelayer/sdk'


const DEBUG = process.env.DEBUG_SDK_UTILS


export const generate = async (resources: any): Promise<any> => {

  console.log('Generating include helper...')

  const resourcesFile = resolve('src/helpers/include/resources.ts')
  const resourcesFileBkp = resourcesFile + '.bkp'
  const encoding = 'utf-8'


  try {

    const resourceHelpers: Partial<Record<ResourceTypeLock, string>> = {}
    resources.forEach(r => resourceHelpers[r.id] = Inflector.camelize(r.id))

    const includeClasses: string[] = []

    
    for (const res of resources) {

      if (res.type !== 'resources') continue

      const includeClass: string[] = []

      includeClass.push(`class ${Inflector.camelize(res.id)}Include extends ResourceInclude {`)
      
      for (const [name, val] of Object.entries(res.attributes.relationships)) {
        const rel = val as any
        if (rel.polymorphic && !Object.values(resourceHelpers).includes(rel.class_name)) continue
        const polymorphic = rel.polymorphic ? ' // polymorphic' : ''
        includeClass.push(`\tget ${name}(): ${rel.class_name}Include { return new ${rel.class_name}Include(this.include('${name}'))}${polymorphic}`)
      }
      includeClass.push('}')

      includeClasses.push(includeClass.join('\n'))
  
    }


    const eslint = [
      '/* eslint-disable @typescript-eslint/no-extraneous-class */',
      '/* eslint-disable @typescript-eslint/no-unused-vars */'
    ]

    const imports = [
      'import { ResourceInclude } from \'./base\''
    ]

    const header: string[] = [
      eslint.join('\n'),
      imports.join('\n'),
      '\n\n\n'
    ]

    const helperClass = [
      '\n\n\n',
      'export class IncludeHelper {',
      ...Object.entries(resourceHelpers).map(([res, clazz]) =>
        `\tget ${Inflector.pluralize(res)}(): ${clazz}Include { return new ${clazz}Include() }`
      ),
      '}\n'
    ]

    // Backup current file
    renameSync(resourcesFile, resourcesFileBkp)

    // Create new file
    writeFileSync(resourcesFile, header.join('\n'), { encoding })
    appendFileSync(resourcesFile, includeClasses.join('\n\n\n'), { encoding })
    appendFileSync(resourcesFile, helperClass.join('\n'), { encoding })

    console.log('Include helper generated.')

  } catch (error: any) {
    console.log('Error generating include helper: ' + error.message)
    if (DEBUG) console.log(error)
  }
  finally {
    // Delete backup file if exists
    if (existsSync(resourcesFileBkp)) unlinkSync(resourcesFileBkp)
  }

}
