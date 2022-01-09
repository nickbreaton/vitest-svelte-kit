import { beforeEach, test, expect } from "vitest"
import { cleanup, render } from "@testing-library/svelte"

import About from "./about.svelte"

beforeEach(cleanup)

test("can render", () => {
    render(About)
})

test("can find the correct page title", () => {
    const { getByText } = render(About)
    expect(getByText("About this app")).toBeDefined()
})
