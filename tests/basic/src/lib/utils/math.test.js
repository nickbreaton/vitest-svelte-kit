import { add } from '$lib/utils/math'
import { test, expect } from 'vitest'

test('default $lib imports work', () => {
    expect(add(1, 2)).toBe(3)
})