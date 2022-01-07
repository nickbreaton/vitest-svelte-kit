import { vi, test, expect } from "vitest"
import { disableScrollHandling } from "$app/navigation"

vi.mock("$app/navigation", () => {
    return { disableScrollHandling: vi.fn() }
})

test("ensure built-in modules can be mocked", () => {
    disableScrollHandling()
    expect(disableScrollHandling).toHaveBeenCalled()
})
