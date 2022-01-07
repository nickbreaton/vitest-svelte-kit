import { test, expect } from "vitest"
import * as nav from "$app/navigation"

test("$app/navigation interface is mainted with noop functions", async () => {
    expect(nav.disableScrollHandling()).toBeUndefined()

    expect(nav.goto()).toBe(expect.any(Promise))
    expect(await nav.goto()).toBeUndefined()

    expect(nav.invalidate()).toBe(expect.any(Promise))
    expect(await nav.invalidate()).toBeUndefined()

    expect(nav.prefetch()).toBe(expect.any(Promise))
    expect(await nav.prefetch()).toBeUndefined()

    expect(nav.prefetchRoutes()).toBe(expect.any(Promise))
    expect(await nav.prefetchRoutes()).toBeUndefined()
})
