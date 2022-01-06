import "zx/globals"

const passedArgs = process.argv.slice(3)

await $`pnpm bootstrap ${passedArgs}`
await $`pnpm test ${passedArgs}`
