import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
    plugins: [
        ViteImageOptimizer(),
        sveltekit(),
        Icons({
            compiler: 'svelte',
        }),
        devtoolsJson(),
    ],
});
