import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        amp: true,

        vite: {
            test: {
                environment: "jsdom",
            },
        },
    },
}

export default config
