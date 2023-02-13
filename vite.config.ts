import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from "url";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/ui/components", import.meta.url)),
			"@config": fileURLToPath(new URL("./src/app.config.ts", import.meta.url)),
			"@interfaces": fileURLToPath(new URL("./src/interfaces", import.meta.url)),
			"@models": fileURLToPath(new URL("./src/models", import.meta.url)),
			"@controllers": fileURLToPath(new URL("./src/controllers", import.meta.url)),
			"@styles": fileURLToPath(new URL("./src/ui/styles", import.meta.url)),
			"@stores": fileURLToPath(new URL("./src/lib/stores", import.meta.url)),
			"@images": fileURLToPath(new URL("./src/lib/images", import.meta.url)),
		},
	  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
