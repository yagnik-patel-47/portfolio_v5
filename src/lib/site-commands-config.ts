import {
	Navigation,
	Sun,
	Moon,
	SunMoon,
	ExternalLink,
	Copy,
} from "lucide-react";

const navigationCommands = [
	{
		id: "navigate-home",
		label: "cd home",
		function: () => {
			window.location.href = "/";
		},
		icon: Navigation,
	},
	{
		id: "navigate-about",
		label: "cd about",
		function: () => {
			window.location.href = "/about";
		},
		icon: Navigation,
	},
	{
		id: "navigate-work",
		label: "cd work",
		function: () => {
			window.location.href = "/work";
		},
		icon: Navigation,
	},
	{
		id: "navigate-imlost",
		label: "cd i'm lost",
		function: () => {
			window.location.href = "/imlost";
		},
		icon: Navigation,
	},
];

const themeCommands = [
	{
		id: "theme-light",
		label: "set theme light",
		function: () => {
			document.documentElement.classList.remove("dark");
		},
		icon: Sun,
	},
	{
		id: "theme-dark",
		label: "set theme dark",
		function: () => {
			document.documentElement.classList.add("dark");
		},
		icon: Moon,
	},
	{
		id: "theme-system",
		label: "set theme system",
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
		function: async () => {
			await navigator.clipboard.writeText("yagnikp@proton.me");
		},
		icon: Copy,
	},
	{
		id: "soical-twitter",
		label: "open twitter account",
		function: () => {
			window.open("https://x.com/yagnik_pt", "_blank");
		},
		icon: ExternalLink,
	},
	{
		id: "soical-github",
		label: "open github account",
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
