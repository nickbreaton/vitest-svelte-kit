import { extractFromSvelteConfig } from "vitest-svelte-kit"
import { virtualModulePlugin } from "@vitest-svelte-kit/virtual-module-plugin"

import svelteConfig from "./svelte.config.js"

export default extractFromSvelteConfig({
    ...svelteConfig,
    kit: {
        ...svelteConfig.kit,
        vite: {
            plugins: [virtualModulePlugin()],
        },
    },
})
