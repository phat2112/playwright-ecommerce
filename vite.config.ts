import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const currentFileUrl = import.meta.url;
const currentDirUrl = new URL('.', currentFileUrl).pathname;

console.log({currentFileUrl, currentDirUrl});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@components': path.resolve(currentDirUrl, 'src/components'),
			'@screen': path.resolve(currentDirUrl, 'src/screen'),
			'@mock': path.resolve(currentDirUrl, 'src/mocks'),
			'@services': path.resolve(currentDirUrl, 'src/services'),
			'@utils': path.resolve(currentDirUrl, 'src/utils'),
			'@layouts': path.resolve(currentDirUrl, 'src/layouts'),
			'@models': path.resolve(currentDirUrl, 'src/models'),
			'@guards': path.resolve(currentDirUrl, 'src/guards'),
		},
	},
});
