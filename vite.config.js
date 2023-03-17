import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api' : 'http://127.0.0.1:7071'
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
