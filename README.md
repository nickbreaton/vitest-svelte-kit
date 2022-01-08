# vitest-svelte-kit

Automatically configure Vitest from your Svelte Kit configuration.

## Getting Started

### Installing

In an existing Svelte Kit project, run the followng.

```sh
npm install --save-dev vitest vitest-svelte-kit
```

### Configuring

Create a file called `vitest.config.js` and add the following.

```js
import { extractFromSvelteConfig } from "vitest-svelte-kit"

export default extractFromSvelteConfig()
```

To learn more about how you can configure Vitest, visit the [Configuring Vitest](https://vitest.dev/guide/#configuring-vitest) section in its documentation.

## What’s Inlcuded

This package aims to emulate Svelte Kit specific behavior for a unit testing context. It does not actually run Svelte Kit, but rather configures Vite in a way similar to how Svelte Kit would configure it.

### Svelte File Support

Importing `.svelte` files into tests are fully supported with no additional configuration.

### Svelte Kit Modules

Svelte Kit makes a number of [modules](https://kit.svelte.dev/docs#modules) available to your application. This package will define these modules with reasonable defaults, but if you depend on their behavior its suggested you mock them using Vitest’s [mocking functionality](https://vitest.dev/guide/mocking-modules.html).

### Vite Configuration

Since Svelte Kit is built on Vite, it allows you to pass a [Vite configuration](https://kit.svelte.dev/docs#configuration-vite) as part of your Svelte config file. This package will use that configuration when running Vitest – meaning any custom Vite config, such as plugins, will be used in your tests.

## Stability

Vitest and Svelte Kit are both under active development and are subject to breaking changes. This package aims to stay up-to-date with any upstream changes, but may introduce breaking changes as a result.

When both of these projects become stable, this package aims to follow suit.
