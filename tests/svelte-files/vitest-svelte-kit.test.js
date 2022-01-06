// @vitest-environment jsdom

import { test, expect } from 'vitest'
import { render } from '@testing-library/svelte'

import Index from './src/routes/index.svelte'

test('.svelte files can be loaded', () => {
    const { getByText } = render(Index)
    expect(getByText('Welcome to SvelteKit')).toBeTruthy()
})