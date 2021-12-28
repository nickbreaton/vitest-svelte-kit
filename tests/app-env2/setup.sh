# remove existing files
git clean -Xf *

# copy from template
cp -rn ../../templates/svelte-kit-typescript/* .

# install packages
pnpm add -D vite vitest vitest-svelte-kit@workspace:*

# run tests
pnpm vitest run