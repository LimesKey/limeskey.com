import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), tailwindcss()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
		  // Allow serving files from one level up to the project root
		  allow: ['static/**/**'],
		},
	},
};

export default config;
