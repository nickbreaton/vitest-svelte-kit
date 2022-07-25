import path from "path"
import { defineConfig, UserConfig } from "vite"
import { pathToFileURL } from "url"

import { svelte } from "@sveltejs/vite-plugin-svelte"
import type { Config as SvelteConfig } from "@sveltejs/kit"

import { getValue } from "./utils"
import { kitModuleEmulator } from "./plugins/kit-module-emulator"

export async function extractFromSvelteConfig(inlineConfig?: SvelteConfig) {
    const resolvedSvelteConfigFile = path.resolve(process.cwd(), "svelte.config.js")
    const file = pathToFileURL(resolvedSvelteConfigFile).href

    const svelteConfig: SvelteConfig =
        inlineConfig ?? (await import(file).then((module) => module.default))

    const resolvedViteConfigFile = path.resolve(process.cwd(), "vite.config.js")
    const viteConfigFile = pathToFileURL(resolvedViteConfigFile).href

    const viteConfig: UserConfig = (await import(viteConfigFile).then((module) => module.default))

    const { plugins: userPlugins = [], ...userConfig } = getValue(
        viteConfig ?? {}
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
