import { test, expect } from "vitest"

// wont resolve unless config is correctly passed
import { value } from "virtual-module"

test("process.env.VITEST should be truthy enabling the virtual module plugin", () => {
    expect(value).toBeTruthy()
})
