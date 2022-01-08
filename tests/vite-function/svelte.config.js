import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: () => ({
            plugins: [
                {
                    name: "example-plugin",
                    resolveId(id) {
                        if (id === "virtual-module") {
                            return id
                        }
                    },
                    load(source) {
                        if (source === "virtual-module") {
                            return "export const value = 'test'"
                        }
                    },
                },
            ],
        }),
    },
}

export default config
