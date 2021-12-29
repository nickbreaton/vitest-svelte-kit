# vitest-svelte-kit

Automatically configure Vitest from your Svelte Kit configuration.

## Getting Started

### Installing

In an existing Svelte Kit project, run the followng.

```sh
npm i -D vite vitest vitest-svelte-kit
```

### Configuring

Create a file called `vitest.config.js` and add the following.

```js
import { extractFromSvelteConfig } from 'vitest-svelte-kit'

export default extractFromSvelteConfig()
```

By default Vitest will use the Vite configuration present in `vite.config.js`. Since in Svelte Kit the Vite confiugration is instead a part of `svelte.config.js`, we will extract it, plus any inferred configuration, and pass that to Vitest.

To learn more about how you can configure Vitest, visit the [Configuring Vitest](https://vitest.dev/guide/#configuring-vitest) section its documentation.

## What’s Inlcuded

This package aims to either emulate or mock any Svelte Kit specific behavior. This includes:

1. Svelte file support
1. Svelte config embedded Vite configuration
1. `$lib` mapping
1. `$app/env` polyfill
1. `$app/stores` mocking