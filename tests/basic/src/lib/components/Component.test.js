// @vitest-environment jsdom

import Component from './Component.svelte'
import { render } from '@testing-library/svelte'
import { test, expect } from 'vitest'

test('it renders', () => {
    const { getByText } = render(Component)
    expect(getByText('hello, world')).toBeTruthy()
})
