import { test, expect } from "vitest"
import Example from "$lib/components/Example.svelte"

test("ensure svelte files can import from $lib", () => {
    expect(Example).toBeDefined()
})
