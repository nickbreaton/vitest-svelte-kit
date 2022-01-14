import "zx/globals"
import { forEachTestDir } from "./utils/tests.mjs"
import { resolveEsmPath } from "./utils/path.mjs"
import ncp from "ncp"

await $`pnpm build --filter ./packages`

const root = process.cwd()

await forEachTestDir(async (testDir) => {
    process.chdir(path.resolve(root, `./tests/${testDir}`))
    console.log("\n\n" + chalk.cyan(" BOOTSTRAP ") + ` ${process.cwd()}\n`)

    // load configuration
    const bootstrapFile = resolveEsmPath(
        process.cwd(),
        "vitest-svelte-kit.boot.mjs"
    )
    const module = await import(bootstrapFile)

    // remove prior template files
    await $`git clean -Xf *`

    // copy template files
    const templateDir = path.resolve(__dirname, "../templates", module.template)
    const templateFiles = await fs.promises.readdir(templateDir)
    const absoluteTemplateFiles = templateFiles.map((file) =>
        path.resolve(templateDir, file)
    )
    await new Promise((resolve, reject) => {
        ncp.ncp(templateDir, process.cwd(), { clobber: false }, (error) => {
            error ? reject(error) : resolve()
        })
    })

    // modify package.json
    const name = `@vitest-svelte-kit/${testDir}`
    const pkg = JSON.parse(await fs.promises.readFile("package.json", "utf-8"))
    pkg.name = name
    pkg.private = true
    pkg.scripts.test = "vitest run"
    await fs.promises.writeFile("package.json", JSON.stringify(pkg, null, 4))

    // install vite, vitest, and vitest-svelte-kit
    await $`pnpm add --prefer-offline -D vite vitest 'vitest-svelte-kit@workspace:*'`

    // run local bootstrap file
    await module.bootstrap?.()
})

// ensure all modules are installed
await $`pnpm install`
