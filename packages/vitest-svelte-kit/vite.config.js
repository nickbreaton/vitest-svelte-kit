import { defineConfig } from "vite"

export default defineConfig({
    build: {
        target: "es2020",
        lib: {
            entry: "./src/index.ts",
            formats: ["es"],
            fileName: () => "index.mjs",
        },
        rollupOptions: {
            external: [
                //
                "@sveltejs/kit",
                "@sveltejs/vite-plugin-svelte",
                "fs",
                "path",
                "vite",
            ],
        },
    },
})
