import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#7fc5ff',
					200: '#3fa8ff',
					300: '#008bfe',
					400: '#0068be',
					500: '#003b6c',
					'alpha-10': '#0068be'
				},
				secondary: {
					100: '#d2e7c0',
					200: '#a6cf81',
					300: '#79b445',
					400: '#5e8c36',
					500: '#436326',
					'alpha-10': '#79b445'
				},
				neutral: {
					100: '#ffffff',
					200: '#dfdfdf',
					300: '#c0bfbf',
					400: '#a29e9f',
					500: '#857e80',
					600: '#686163',
					700: '#4d474a',
					800: '#383338',
					900: '#312f34',
					1000: '#3c3c44',
					'alpha-10': '#3c3c44'
				},
				red: {
					100: '#fb3748',
					200: '#d00416',
					'alpha-10': '#fb3748'
				},
				yellow: {
					100: '#ffdb43',
					200: '#dfb400',
					'alpha-10': '#ffdb43'
				},
				green: {
					100: '#84ebb4',
					200: '#1fc16b',
					'alpha-10': '#1fc16b'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				// primary: {
				// 	DEFAULT: 'hsl(var(--primary))',
				// 	foreground: 'hsl(var(--primary-foreground))'
				// },
				// secondary: {
				// 	DEFAULT: 'hsl(var(--secondary))',
				// 	foreground: 'hsl(var(--secondary-foreground))'
				// },
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				h1: ["58px", { lineHeight: "87px", letterSpacing: "0px" }],
				h2: ["48px", { lineHeight: "72px", letterSpacing: "0px" }],
				h3: ["40px", { lineHeight: "60px", letterSpacing: "0px" }],
				h4: ["34px", { lineHeight: "51px", letterSpacing: "0px" }],
				h5: ["28px", { lineHeight: "42px", letterSpacing: "0px" }],
				h6: ["24px", { lineHeight: "36px", letterSpacing: "0px" }],
				h7: ["20px", { lineHeight: "30px", letterSpacing: "0px" }],
				b1: ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
				b2: ["14px", { lineHeight: "21px", letterSpacing: "0px" }],
				b3: ["12px", { lineHeight: "18px", letterSpacing: "0px" }],
				b4: ["10px", { lineHeight: "15px", letterSpacing: "0px" }],
				b5: ["8px", { lineHeight: "12px", letterSpacing: "0px" }],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
