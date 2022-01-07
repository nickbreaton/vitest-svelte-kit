// @vitest-environment jsdom

import { test, expect } from "vitest"
import { render } from "@testing-library/svelte"
import { get } from "svelte/store"

import Stores from "$lib/Stores.svelte"
import { getStores, navigating, page, session } from "$app/stores"

test("ensure $app/stores to have bare-bones defaults", () => {
    const { getByTestId } = render(Stores)

    const getValueByTestId = (testId) => {
        return JSON.parse(getByTestId(testId).textContent)
    }

    expect(getValueByTestId("session")).toEqual(null)
    expect(getValueByTestId("getStores.session")).toEqual(null)

    expect(getValueByTestId("navigating")).toEqual(null)
    expect(getValueByTestId("getStores.navigating")).toEqual(null)

    expect(getValueByTestId("page")).toEqual({
        url: "http://localhost/", // stringified version of URL
        params: {},
    })
    expect(getValueByTestId("getStores.page")).toEqual({
        url: "http://localhost/", // stringified version of URL
        params: {},
    })
})

test("ensure $app/stores stores cannot be called outside component initialization", () => {
    expect(() => getStores()).toThrow(/Function called outside component initialization/)
    expect(() => get(navigating)).toThrow(/Function called outside component initialization/)
    expect(() => get(page)).toThrow(/Function called outside component initialization/)
    expect(() => get(session)).toThrow(/Function called outside component initialization/)
})
