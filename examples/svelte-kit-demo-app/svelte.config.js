import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: {
            test: {
                environment: "jsdom",
                /*
                    `@testing-library/jest-dom` relies on Jest globals
                    (`expect`, for instance). But we don't need the globals to
                    be presented in our tests - we need to get them via imports
                    from `vitest`. That's why the appropriate types
                    (`vitest/globals`) are not added to `tsconfig.json`, as
                    advised in the [docs](https://vitest.dev/config/#globals).
                */
                globals: true,
                setupFiles: ['setupTests.ts']
            },
        },
    },
}

export default config
