import { test, expect } from "vitest"
import * as paths from "$app/paths"

test("ensure $app/paths is polyfilled with defaults", () => {
    expect(paths).toEqual({
        base: "",
        assets: "",
    })
})
