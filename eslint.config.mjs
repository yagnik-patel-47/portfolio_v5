import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: compat.extends("next/core-web-vitals", "next/typescript"),
		rules: {
			"react/no-unescaped-entities": "off",
			"typescript-eslint/no-explicit-any": "off",
		},
	}),
];

export default eslintConfig;
