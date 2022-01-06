import 'zx/globals'

export const template = 'svelte-kit-default'

export async function bootstrap() {
    await $`pnpm add -D @testing-library/svelte jsdom`
}