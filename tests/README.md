Each test package in here only contains files that differ from the template its based on. 

You’ll notice `vitest-svelte-kit.boot.mjs` file in each package which specifies which [template](../templates) that test is based on, and potentially any additional changes that need to be made inside a `bootstrap` function.

The [bootstrap script](../scripts/bootstrap.mjs) will take care of building these packages before any tests are run. 
