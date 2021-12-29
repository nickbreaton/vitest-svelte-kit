import { expect, test } from 'vitest'

// @ts-ignore
import content from './content.yaml'

test('custom plugins work', () => {
    expect(content).toEqual({ hello: 'world' })
})
