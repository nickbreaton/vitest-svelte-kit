/// <reference types="@sveltejs/kit" />

import { test, expect } from 'vitest'
import * as env from '$app/env'

test('ensure $app/env is polyfilled', () => {
    expect(env).toMatchInlineSnapshot(`
{
  "amp": false,
  "browser": false,
  "dev": true,
  "mode": "development",
  "prerendering": false,
}`)
})