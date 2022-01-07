import { test, expect } from "vitest"
import { disableScrollHandling, goto, invalidate, prefetch, prefetchRoutes } from "$app/navigation"

test("$app/navigation has bear-bones implementation", async () => {
    expect(disableScrollHandling()).toBeUndefined()

    expect(goto()).toBe(expect.any(Promise))
    expect(await goto()).toBeUndefined()

    expect(invalidate()).toBe(expect.any(Promise))
    expect(await invalidate()).toBeUndefined()

    expect(prefetch()).toBe(expect.any(Promise))
    expect(await prefetch()).toBeUndefined()

    expect(prefetchRoutes()).toBe(expect.any(Promise))
    expect(await prefetchRoutes()).toBeUndefined()
})
