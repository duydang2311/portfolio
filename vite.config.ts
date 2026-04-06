import { mdToHtml } from './src/lib/plugins/md-to-html';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				custom: FileSystemIconLoader('./src/lib/assets/icons', (svg) => svg)
			}
		}),
		mdToHtml()
	]
});
