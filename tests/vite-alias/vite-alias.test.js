import { expect, test } from 'vitest'
import { add } from '$lib2/math'

test('can define a custom alias', () => {
    expect(add(2, 3)).toEqual(5)
})
