import HigrowImage from "@/assets/projects/higrow.webp";
import RPSImage from "@/assets/projects/rps.webp";
import JpDisplayImage from "@/assets/projects/jp.webp";
import GalaryImage from "@/assets/projects/galary.webp";
import LegoImage from "@/assets/projects/lego.webp";
import SMAImage from "@/assets/projects/sma.webp";
import MangaReaderImage from "@/assets/projects/mangareader.webp";
import PS5Image from "@/assets/projects/ps5.webp";
import KeyboardShopImage from "@/assets/projects/keyboard-shop.webp";

export const projects = [
	{
		name: "Keyboard Shop",
		description:
			"A keyboard and accessories store built with SvelteKit. It simulates real-world features such as product ordering and cart management. On the admin level, it offers functionalities like product catalog management integrated with Stripe and order management.",
		image: KeyboardShopImage,
		tech: ["Sveltekit", "Drizzle", "Stripe"],
		links: {
			site: "https://keyboard-ecommerce-one.vercel.app",
			repo: "https://github.com/yagnik-patel-47/keyboard-ecommerce",
		},
		category: "real-world",
	},
	{
		name: "HiGrow",
		description:
			"HiGrow is platform where our aim is to help empowering minds worldwide to Learn, compete, and grow together by workshops and contests!",
		image: HigrowImage,
		tech: ["Nextjs", "Supabase"],
		links: {
			site: "https://higrow-test.vercel.app",
		},
		category: "real-world",
	},
	{
		name: "PvP Rock Paper Scissors",
		description:
			"A multiplayer online game developed using Deno KV and Socket.IO",
		image: RPSImage,
		tech: ["Deno", "Socket.io", "SvelteKit"],
		links: {
			site: "https://pvp-rps.vercel.app",
			repo: "https://github.com/yagnik-patel-47/pvp-rps-server",
		},
		category: "fullstack",
	},
	{
		name: "PS5 Home Screen",
		description: "A clone of PS5 home screen with same layout animations.",
		image: PS5Image,
		tech: ["React", "Framer Motion"],
		links: {
			site: "https://ps5-home-screen.vercel.app",
			repo: "https://github.com/yagnik-patel-47/ps5-home-screen",
		},
		category: "static",
	},
	{
		name: "Animation Galary",
		description: "A single page image gallery site with awesome animations.",
		image: GalaryImage,
		tech: ["React", "Framer Motion"],
		links: {
			site: "https://animated0casestudy.vercel.app",
			repo: "https://github.com/yagnik-patel-47/animated_casestudy",
		},
		category: "static",
	},
	{
		name: "Japanese Art",
		description: "A static page website with awesome animations.",
		image: JpDisplayImage,
		tech: ["Astro", "GSAP", "TailWind CSS"],
		links: {
			site: "https://jp-display.vercel.app",
			repo: "https://github.com/yagnik-patel-47/jp_display",
		},
		category: "static",
	},
	{
		name: "Lego One",
		description:
			"A landing page for real estate ecommerce website with somewhat good design.",
		image: LegoImage,
		tech: ["Nextjs", "TailWind CSS"],
		links: {
			site: "https://lego-one.vercel.app",
			repo: "https://github.com/yagnik-patel-47/lego",
		},
		category: "static",
	},

	{
		name: "Mangasss",
		description:
			"A manga reader app where you'll find whatever manga you wanna read.",
		image: MangaReaderImage,
		tech: ["SvelteKit", "TailWind CSS"],
		links: {
			site: "https://mangasss.vercel.app",
		},
		category: "app",
	},
	{
		name: "Social Media App",
		description:
			"A social media app clone having basic features similar to Instagram.",
		image: SMAImage,
		tech: ["Nextjs", "Firebase", "Typescript", "Redux"],
		links: {
			site: "https://moments-sma.vercel.app",
			repo: "https://github.com/Yagnik-Patel-47/social-media-app",
		},
		category: "fullstack",
	},
];

export const featuredProjects = [projects[0], projects[1]];
export const realWorldProjects = projects.filter(
	(project) => project.category === "real-world",
);
export const fullstackProjects = projects.filter(
	(project) => project.category === "fullstack",
);
export const staticProjects = projects.filter(
	(project) => project.category === "static",
);
export const appProjects = projects.filter(
	(project) => project.category === "app",
);
