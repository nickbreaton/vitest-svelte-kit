import { expect, test } from 'vitest'

// @ts-ignore
import content from './vitest-svelte-kit.fixture.yaml'

test('custom plugins work', () => {
    expect(content).toEqual({ hello: 'world' })
})
