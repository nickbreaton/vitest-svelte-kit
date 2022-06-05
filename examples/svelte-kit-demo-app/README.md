# SvelteKit Demo App with Vitest

## Additional Dependencies

After this project was created with `npm create svelte@next svelte-kit-demo-app`, the following dependencies were installed:

-   `@testing-library/jest-dom`
-   `@testing-library/svelte`
-   `jsdom`
-   `vitest`
-   `vitest-svelte-kit`

## Configuration

1. The file `vitest.config.js` was created to set up Vitest with SvelteKit.
2. The existing `svelte.config.js` was modified to set up Vitest with jsdom.

## Test Files

An example test file was added at `src/routes/about.test.ts`.

## Running

### Vitest

```sh
npm test
```

### SvelteKit

```sh
npm run dev
```
