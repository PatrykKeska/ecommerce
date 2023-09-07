import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				fadeDown: "fadeDown 0.5s ease-in-out forwards",
			},
			keyframes: {
				fadeDown: {
					"0%": {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},

					// },
					// "fade-in-up": {
					// 	"0%": {
					// 		opacity: "0",
					// 		transform: "translateY(10px)",
					// 	},
					// 	"100%": {
					// 		opacity: "1",
					// 		transform: "translateY(0)",
					// 	},
					// },
					// "spin-slow": {
					// 	from: {
					// 		transform: "rotate(0deg)",
					// 	},
					// 	to: {
					// 		transform: "rotate(360deg)",
					// 	},
					// },
				},
			},
		},
		plugins: [require("@tailwindcss/forms")],
	},
};

// eslint-disable-next-line import/no-default-export
export default config;
