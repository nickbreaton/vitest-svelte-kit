import { expect, test } from 'vitest'

// @ts-ignore
import content from '../fixtures/content.yaml'

test('custom plugins work', () => {
    expect(content).toEqual({ hello: 'world' })
})

// @ts-ignore
import { get } from 'lodash'

test('custom aliases work', () => {
    expect(get({ hello: 'world' }, 'hello')).toEqual('world')
})