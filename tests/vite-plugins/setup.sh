#!/bin/bash

# copy from template
cp -rn ../../templates/svelte-kit-typescript/* .

# install packages
pnpm add -D vite vitest vitest-svelte-kit@workspace:* @originjs/vite-plugin-content

# tweak package.json
pnpm json -I -f package.json \
    -e 'this.name="@vitest-svelte-kit/vite-plugins"' \
    -e 'this.private=true' \
    -e 'this.scripts.test="vitest run"'