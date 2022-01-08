# SvelteKit Demo App with Vitest

## Additional Dependencies

After this project was created with `npm create svelte@next svelte-kit-demo-app`, the following dependecies were installed:

-   `@testing-library/svelte`
-   `jsdom`
-   `vitest`
-   `vitest-svelte-kit`

## Configuration

1. The file `vitest.config.js` was created to set up Vitest with Svelte Kit.
2. The existing `svelte.config.js` was modified to set up Vitest with jsdom.

## Test Files

An example test file was added at `src/routes/about.test.ts`.

## Running

Vitest can also be run with `npm test`.

The Svelte Kit dev server can stil be run with `npm run dev`.
