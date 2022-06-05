import { test, expect } from "vitest"
import { render, screen } from "@testing-library/svelte"

import About from "./about.svelte"

test("can render", () => {
    render(About)
})

test("can find the correct page title", () => {
    render(About)
    expect(screen.getByText("About this app")).toBeInTheDocument();
})
