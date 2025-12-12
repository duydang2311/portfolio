import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
    plugins: [wasm(), sveltekit(), devtoolsJson()],
});
