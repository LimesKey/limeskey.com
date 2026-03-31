import { sveltekit } from '@sveltejs/kit/vite';
import { execSync } from 'node:child_process';
import tailwindcss from '@tailwindcss/vite'

function readValue(command, fallback) {
	try {
		const value = execSync(command, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
		return value || fallback;
	} catch {
		return fallback;
	}
}

const buildBranch =
	process.env.CF_PAGES_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	readValue('git rev-parse --abbrev-ref HEAD', 'unknown-branch');

const buildCommit = (
	process.env.CF_PAGES_COMMIT_SHA ||
	process.env.VERCEL_GIT_COMMIT_SHA ||
	readValue('git rev-parse --short HEAD', 'unknown')
).slice(0, 7);

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), tailwindcss()],
	define: {
		__BUILD_BRANCH__: JSON.stringify(buildBranch),
		__BUILD_COMMIT__: JSON.stringify(buildCommit)
	},
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
