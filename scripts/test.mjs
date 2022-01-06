import 'zx/globals'

const root = process.cwd()
const passedArgs = process.argv.slice(3)
const testDirs = passedArgs.length ? passedArgs : (await fs.promises.readdir('./tests'))

for (const testDir of testDirs) {
    const name = `@vitest-svelte-kit/${testDir}`

    process.chdir(path.resolve(root, `./tests/${testDir}`))

    await $`pnpm test`
}