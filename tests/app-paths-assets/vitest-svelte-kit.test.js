import { test, expect } from "vitest"
import * as paths from "$app/paths"

test("ensure $app/paths is polyfilled with base set in config", () => {
    expect(paths).toEqual({
        base: "/base",
        assets: "/assets",
    })
})
