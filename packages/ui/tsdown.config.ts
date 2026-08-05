import { defineConfig } from "tsdown";

export default defineConfig([
	{
		entry: ["src/index.ts"],
		format: ["esm"],
		dts: true,
		splitting: false,
		sourcemap: true,
		clean: true,
		external: ["react", "react-dom", "next"],
	},
	{
		entry: ["src/client.ts"],
		format: ["esm"],
		dts: true,
		splitting: false,
		sourcemap: true,
		clean: true,
		banner: { js: '"use client";' },
		external: ["react", "react-dom", "next"],
	},
]);
