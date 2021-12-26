import { expect, test } from 'vitest'

// @ts-ignore
import content from '../fixtures/content.yaml'

test('custom plugins work', () => {
    expect(content).toEqual({ hello: 'world' })
})