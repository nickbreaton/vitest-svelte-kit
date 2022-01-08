import adapter from "@sveltejs/adapter-auto"
import { virtualModulePlugin } from "@vitest-svelte-kit/virtual-module-plugin"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: () => ({
            plugins: [virtualModulePlugin()],
        }),
    },
}

export default config
