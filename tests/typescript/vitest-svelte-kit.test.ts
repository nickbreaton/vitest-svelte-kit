import { expect, test } from "vitest"
import { add } from "$lib/math"

test("can import a TypeScript file", () => {
    expect(add(2, 3)).toEqual(5)
})
