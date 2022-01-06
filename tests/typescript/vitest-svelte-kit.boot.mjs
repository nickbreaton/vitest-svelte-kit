import "zx/globals"

export const template = "svelte-kit-typescript"

export async function bootstrap() {
    // install JSON5
    await $`pnpm add -D json5`

    const JSON5 = await import("json5").then((module) => module.default)

    // include test in tsconfig
    const tsconfig = JSON5.parse(await fs.promises.readFile("tsconfig.json", "utf-8"))
    tsconfig.include.push("vitest-svelte-kit.test.ts")
    await fs.promises.writeFile("tsconfig.json", JSON.stringify(tsconfig, null, 4))
}
