import {
	Navigation,
	Sun,
	Moon,
	SunMoon,
	ExternalLink,
	Copy,
} from "lucide-react";

type Command = {
	id: string;
	label: string;
	type: "link" | "function";
	href?: string;
	function?: () => void;
	icon: React.ElementType;
};

const navigationCommands = [
	{
		id: "navigate-home",
		label: "cd home",
		type: "link",
		href: "/",
		function: null,
		icon: Navigation,
	},
	{
		id: "navigate-about",
		label: "cd about",
		type: "link",
		href: "/about",
		function: null,
		icon: Navigation,
	},
	{
		id: "navigate-work",
		label: "cd work",
		type: "link",
		href: "/work",
		function: null,
		icon: Navigation,
	},
	{
		id: "navigate-imlost",
		label: "cd i'm lost",
		type: "link",
		href: "/imlost",
		function: null,
		icon: Navigation,
	},
];

const themeCommands = [
	{
		id: "theme-light",
		label: "set theme light",
		type: "function",
		href: null,
		function: () => {
			document.documentElement.classList.remove("dark");
		},
		icon: Sun,
	},
	{
		id: "theme-dark",
		label: "set theme dark",
		type: "function",
		href: null,
		function: () => {
			document.documentElement.classList.add("dark");
		},
		icon: Moon,
	},
	{
		id: "theme-system",
		label: "set theme system",
		type: "function",
		href: null,
		function: () => {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			document.documentElement.classList[isDark ? "add" : "remove"]("dark");
		},
		icon: SunMoon,
	},
];

const socialCommands = [
	{
		id: "copy mail",
		label: "copy mail to clipboard",
		type: "function",
		href: null,
		function: async () => {
			await navigator.clipboard.writeText("yagnik47.dev@gmail.com");
		},
		icon: Copy,
	},
	{
		id: "soical-twitter",
		label: "open twitter account",
		type: "function",
		href: null,
		function: () => {
			window.open("https://x.com/yagnik_pt", "_blank");
		},
		icon: ExternalLink,
	},
	{
		id: "soical-github",
		label: "open github account",
		type: "function",
		href: null,
		function: () => {
			window.open("https://github.com/yagnik-patel-47", "_blank");
		},
		icon: ExternalLink,
	},
];

export const commands = [
	{
		id: "navigation",
		label: "Navigation",
		commands: navigationCommands,
	},
	{
		id: "social",
		label: "Social",
		commands: socialCommands,
	},
	{
		id: "theme",
		label: "Theme",
		commands: themeCommands,
	},
];
