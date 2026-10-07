// Loads .env into the main process, inherited by the test workers: specs read
// process.env at any time, before or without importing test/common
import 'dotenv/config'
import { defineConfig } from 'vitest/config'
import { GLOBAL_TIMEOUT } from './test/timeout.ts'


export default defineConfig({
  test: {
    testTimeout: GLOBAL_TIMEOUT,
    include: ['specs/**/*.spec.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts']
    },
    // fileParallelism: false,
    // testTimeout: 15_000,
    // maxConcurrency: 1
    watch: false
  }
})
