import adapter from "@sveltejs/adapter-auto"
import content from "@originjs/vite-plugin-content"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: {
            plugins: [content.default()],
        },
    },
}

export default config
