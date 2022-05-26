import path from "path"
import { defineConfig } from "vite"
import { pathToFileURL } from "url"

import { svelte } from "@sveltejs/vite-plugin-svelte"
import type { Config as SvelteConfig } from "@sveltejs/kit"

import { getValue } from "./utils"
import { kitModuleEmulator } from "./plugins/kit-module-emulator"

export async function extractFromSvelteConfig(inlineConfig?: SvelteConfig) {
    const resolvedConfigFile = path.resolve(process.cwd(), "svelte.config.js")
    const file = pathToFileURL(resolvedConfigFile).href

    const svelteConfig: SvelteConfig =
        inlineConfig ?? (await import(file).then((module) => module.default))

    const { plugins: userPlugins = [], ...userConfig } = getValue(
        svelteConfig.vite ?? svelteConfig.kit?.vite ?? {}
    )

    return defineConfig({
        ...userConfig,
        plugins: [
            svelte({ hot: false }),
            kitModuleEmulator({ svelteConfig }),
            ...userPlugins,
        ],
    })
}
