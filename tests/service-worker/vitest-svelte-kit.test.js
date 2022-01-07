import { test, expect } from "vitest"
import { build, files, timestamp } from "$service-worker"

test("$service-worker has bear-bones implementation", () => {
    expect(build).toEqual([])
    expect(files).toEqual([])
    expect(timestamp).toEqual(expect.any(Number))
})
