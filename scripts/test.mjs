import "zx/globals"
import { forEachTestDir } from "./utils/tests.mjs"

const root = process.cwd()

forEachTestDir(async (testDir) => {
    const name = `@vitest-svelte-kit/${testDir}`

    process.chdir(path.resolve(root, `./tests/${testDir}`))

    await $`pnpm test`
})
