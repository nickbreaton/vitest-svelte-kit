import { test, expect } from "vitest"

// wont resolve unless config is correctly passed
import { value } from "virtual-module"

test("svelte config can be passed directly", () => {
    expect(value).toBeTruthy()
})
