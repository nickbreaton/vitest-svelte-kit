import "zx/globals"
import { forEachTestDir } from "./utils/tests.mjs"

const root = process.cwd()

await forEachTestDir(async (testDir) => {
    const name = `@vitest-svelte-kit/${testDir}`

    process.chdir(path.resolve(root, `./tests/${testDir}`))

    await $`pnpm test`
})
