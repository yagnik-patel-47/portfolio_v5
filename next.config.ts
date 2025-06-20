import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// output: "export",
	images: {
		remotePatterns: [
			{
				hostname: "i.scdn.co",
			},
		],
	},
	turbopack: {
		rules: {
			"*.svg": {
				loaders: [
					{
						loader: "@svgr/webpack",
						options: {
							svgo: false,
						},
					},
				],
				as: "*.js",
			},
		},
	},
	experimental: {
		reactCompiler: true,
	},
	// images: { unoptimized: true },
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find(
			(rule: {
				test?: {
					test?: (str: string) => boolean;
				};
			}) => rule.test?.test?.(".svg"),
		) as {
			test: RegExp;
			resourceQuery: { not: RegExp[] };
			issuer: unknown;
			exclude?: RegExp;
		};

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							svgo: false,
						},
					},
				],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
};

export default nextConfig;
