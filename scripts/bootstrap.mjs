import 'zx/globals'

const root = process.cwd()
const testDirs = await fs.promises.readdir('./tests')

for (const testDir of testDirs) {
    const name = `@vitest-svelte-kit/${testDir}`
    console.log('\n\n' + chalk.black.bgWhite(' BOOTSTRAP ') + ` ${name}\n`)

    process.chdir(path.resolve(root, `./tests/${testDir}`))

    // load configuration
    const bootstrapFile = path.resolve(process.cwd(), 'vitest-svelte-kit.boot.mjs')
    const module = await import(bootstrapFile)

    // remove prior template files
    await $`git clean -Xf . *`

    // copy template files
    const templateDir = path.resolve(__dirname, '../templates', module.template)
    const templateFiles = await fs.promises.readdir(templateDir)
    const absoluteTemplateFiles = templateFiles.map(file => path.resolve(templateDir, file))
    await $`cp -rn ${absoluteTemplateFiles} . || true`

    // modify package.json
    const pkg = JSON.parse(await fs.promises.readFile('package.json', 'utf-8'))
    pkg.name = name
    pkg.private = true
    pkg.scripts.test = 'vitest run'
    await fs.promises.writeFile('package.json', JSON.stringify(pkg, null, 4))

    // install vite, vitest, and vitest-svelte-kit
    await $`pnpm add --prefer-offline -D vite vitest vitest-svelte-kit@workspace:*`

    // run local bootstrap file
    await module.bootstrap?.()
}

// ensure all modules are installed
await $`pnpm install`
