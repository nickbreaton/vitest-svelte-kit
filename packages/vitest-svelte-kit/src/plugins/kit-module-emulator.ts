import type { ConfigEnv, Plugin } from "vite"
import type { Config as SvelteConfig } from "@sveltejs/kit"
import path from "path"

enum SvelteKitModule {
    "$app/env" = "$app/env",
    "$app/navigation" = "$app/navigation",
    "$app/paths" = "$app/paths",
    "$app/stores" = "$app/stores",
    "$service-worker" = "$service-worker",
}

interface Options {
    svelteConfig: SvelteConfig
}

export const kitModuleEmulator = ({ svelteConfig }: Options): Plugin => {
    let env: ConfigEnv

    return {
        name: "vitest-svelte-kit:kit-module-emulator",
        config(_, _env) {
            env = _env
            return {
                resolve: {
                    alias: {
                        $lib: path.resolve(
                            svelteConfig?.kit?.files?.lib ?? "src/lib"
                        ),
                    },
                },
            }
        },
        resolveId(id) {
            if (id in SvelteKitModule) {
                return id
            }
        },
        load(file) {
            if (file === SvelteKitModule["$app/env"]) {
                // https://kit.svelte.dev/docs#modules-$app-env
                return `
                    export const amp = false;
                    export const browser = typeof window !== 'undefined';
                    export const dev = true;
                    export const mode = ${JSON.stringify(
                        env.mode ?? "development"
                    )};
                    export const prerendering = false;
                `
            }
            if (file === SvelteKitModule["$app/navigation"]) {
                // https://kit.svelte.dev/docs#modules-$app-navigation
                return `
                    export function disableScrollHandling() {}
                    export function goto() { return Promise.resolve() }
                    export function invalidate() { return Promise.resolve() }
                    export function prefetch() { return Promise.resolve() }
                    export function prefetchRoutes() { return Promise.resolve() }
                `
            }
            if (file === SvelteKitModule["$app/paths"]) {
                // https://kit.svelte.dev/docs#modules-$app-paths
                const base = svelteConfig?.kit?.paths?.base ?? ""
                const assets = svelteConfig?.kit?.paths?.assets
                    ? "/_svelte_kit_assets"
                    : base
                return `
                    export const base = ${JSON.stringify(base)};
                    export const assets = ${JSON.stringify(assets)};
                `
            }
            if (file === SvelteKitModule["$app/stores"]) {
                // https://kit.svelte.dev/docs#modules-$app-stores
                return `
                    import { getContext } from 'svelte';
                    import { readable, writable } from 'svelte/store';

                    const stores = {
                        navigating: readable(null),
                        page: readable({ url: new URL('http://localhost'), params: {} }),
                        session: writable(null)
                    }

                    function getStores() {
                        // simulate context dependency
                        getContext()
                        return stores
                    }

                    export { getStores }

                    export const navigating = {
                        subscribe(fn) { return getStores().navigating.subscribe(fn) }
                    }

                    export const page = {
                        subscribe(fn) { return getStores().page.subscribe(fn) }
                    }

                    export const session = {
                        subscribe(fn) { return getStores().session.subscribe(fn) }
                    }
                `
            }
            if (file === SvelteKitModule["$service-worker"]) {
                // https://kit.svelte.dev/docs#modules-$service-worker
                return `
                    export const build = [];
                    export const files = [];
                    export const timestamp = Date.now();
                `
            }
        },
    }
}
