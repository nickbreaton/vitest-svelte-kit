import path from "path"
import fs from "fs"
import vite, { defineConfig } from "vite"

import { svelte } from "@sveltejs/vite-plugin-svelte"
import type { Config as SvelteConfig } from "@sveltejs/kit"

import { getValue } from "./utils"
import { kitModuleEmulator } from "./plugins/kit-module-emulator"

// This entire plugin is essentially trying to mirror https://github.com/sveltejs/kit/blob/09e453f1354ae4946ad121ea32d002742fc12f69/packages/kit/src/core/dev/index.js#L153
// plus pull through any vite configuration specified in svelte.config.js

// TODO
//  - [ ] $lib resolution (default/custom)
//  - [ ] $app resolution + mocking? ("svelte-kit-mocks")
//  - [ ] JS test
//  - [ ] TS test
//  - [ ] CSS test
//  - [ ] handle unfindable svelte config
//  - [ ] accept alternative svelte config via function params
//  - [ ] docs
//  - [ ] rename to "vitest-svelte-kit"

async function fileExists(path: string) {
    return fs.promises
        .access(path, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

async function resolveSvelteConfigFile() {
    const file = path.resolve(process.cwd(), "svelte.config.js")

    if ((await fileExists(file)) === false) {
        throw new Error(
            "Could not find Svelte config. Location checked:\n\n" + file
        )
    }

    return file
}

function makeAbsolute(basePath: string, pathToResolve: string) {
    return path.isAbsolute(pathToResolve)
        ? pathToResolve
        : path.resolve(basePath, pathToResolve)
}

export async function extractFromSvelteConfig(inlineConfig?: SvelteConfig) {
    const svelteConfigFile = await resolveSvelteConfigFile()
    const svelteConfigDir = path.dirname(svelteConfigFile)

    const svelteConfig: SvelteConfig = await import(svelteConfigFile).then(
        (module) => module.default
    )

    const { plugins: userPlugins = [], ...userConfig } = getValue(
        svelteConfig.kit?.vite ?? {}
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
