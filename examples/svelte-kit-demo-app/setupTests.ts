import { cleanup } from '@testing-library/svelte';
import { afterEach } from 'vitest';

import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
	cleanup();
});
