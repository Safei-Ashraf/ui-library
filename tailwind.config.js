/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*"],
	theme: {
		screens: {
			sm: { min: "0px", max: "599px" },
			md: { min: "600px", max: "899px" },
			lg: { min: "900px", max: "1300px" },
			xlg: { min: "1331px" },
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			semiBold: "600",
			bold: "700",
		},
		lineHeight: {
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem",
			20: "1.25rem",
			22: "1.375rem",
			24: "1.5rem",
			32: "2rem",
			36: "2.25rem",
			40: "2.5rem",
			48: "3rem",
			56: "3.5rem",
			64: "4rem",
			72: "4.5rem",
			80: "5rem",
		},
		fontSize: {
			"fs.10": "0.625rem",
			"fs.12": "0.75rem",
			"fs.14": "0.875rem",
			"fs.base": "1rem",
			"fs.20": "1.25rem",
			"fs.28": "1.75rem",
			"fs.32": "2rem",
			"fs.40": "2.5rem",
			"fs.48": "3rem",
			"fs.56": "3.5rem",
			"fs.64": "4rem",
			"fs.72": "4.5rem",
		},
		letterSpacing: {
			"very-tight": "-1.5%",
			tight: "-1%",
			"semi-tight3": "-5%",
			"very-tight2": "-25%",
			"very-tight1": "-15%",
			normal: "0%",
			"semi-wide": "0.15%",
			wide: "0.5%",
			"very-wide": "1%",
		},
		opacity: {
			0.1: 0.1,
			0.2: 0.2,
			0.3: 0.3,
			0.4: 0.4,
			0.5: 0.5,
		},
		padding: {
			xxs: "0.25rem",
			xs: "0.5rem",
			sm: "0.75rem",
			md: "1rem",
			lg: "1.5rem",
			xl: "2rem",
			xxl: "2.5rem",
		},
		margin: {
			xxs: "0.25rem",
			xs: "0.5rem",
			sm: "0.75rem",
			md: "1rem",
			lg: "1.5rem",
			xl: "2rem",
			xxl: "2.5rem",
			xxxl: "3.5rem",
			xxxxl: "5rem",
		},
		borderRadius: {
			sm: "2px",
			md: "4px",
			lg: "8px",
		},
		borderWidth: {
			thin: "1px",
			thick: "2px",
			bold: "4px",
		},
		boxShadow: {
			"shd-1": "0 4px 8px 0 rgba(0, 0, 0, 0.03)",
			"shd-2": "0 8px 16px 0 rgba(0, 0, 0, 0.09)",
			"shd-3": "0 4px 32px 0 rgba(0, 0, 0, 0.14)",
			"shd-4": "0 4px 64px 0 rgba(0, 0, 0, 0.2)",
		},
		colors: {
			primary: {
				DEFAULT: "#00AB0E",
				hover: "#00790A",
				focus: "#004806",
				disabled: " rgba(0, 171, 14, 0.13)",
				border: "rgba(0, 171, 14, 0.7)",
			},
			secondary: {
				DEFAULT: "#0093AD",
				hover: "#00687B",
				focus: "#003E49",
				disabled: "rgba(0, 147, 173, 0.13)",
				border: " rgba(0, 147, 173, 0.7)",
			},
			neutral: {
				DEFAULT: "#3E413F",
				hover: "#2C2E2D",
				focus: "#1A1B1A",
				light: "rgba(62, 65, 63, 0.6)",
				lighter: "rgba(62, 65, 63, 0.3)",
				fade: " rgba(62, 65, 63, 0.1)",
				"disabled-text": "rgba(26, 27, 26, 0.3)",
				"disabled-bg": "#E2E3E2",
			},
			error: {
				DEFAULT: "#E02333",
				hover: "#9F1924",
				disabled: "rgba(224, 35, 51, 0.13)",
				border: "rgba(224, 35, 51, 0.7)",
				content: "#5E0F15",
				background: " rgba(224, 35, 51, 0.1)",
			},
			info: {
				DEFAULT: "#0095D6",
				hover: "#006A98",
				disabled: "rgba(0, 149, 214, 0.13)",
				border: " rgba(0, 149, 214, 0.7)",
				content: "#003F5A",
				background: "rgba(0, 149, 214, 0.1)",
			},
			warning: {
				DEFAULT: "#EDA900",
				hover: "#A87800",
				disabled: " rgba(237, 169, 0, 0.13)",
				border: "rgba(237, 169, 0, 0.7)",
				content: "#644700",
				background: " rgba(237, 169, 0, 0.1)",
			},
			sucess: {
				DEFAULT: "#39BC34",
				hover: "#288525",
				disabled: "rgba(57, 188, 52, 0.13)",
				border: "rgba(57, 188, 52, 0.7)",
				content: "#184F16",
				background: "  rgba(57, 188, 52, 0.1)",
			},
			action: {
				"content-active": "#3E413F",
				"content-disabled": "rgba(62, 65, 63, 0.5)",
				"background-active": "rgba(62, 65, 63, 0.5)",
				"background-disabled": "rgba(62, 65, 63, 0.15)",
				hover: "rgba(62, 65, 63, 0.1)",
			},
			misc: {
				snackbar: "rgba(62, 65, 63, 0.8)",
				overlay: "rgba(62, 65, 63, 0.6)",
				border: "rgba(62, 65, 63, 0.3)",
				divider: " rgba(62, 65, 63, 0.1)",
				rating: "#F1BA33",
			},
			white: "#fff",
			black: "#000",
		},
		extend: {
			spacing: {
				xxs: "0.25rem",
				xs: "0.5rem",
				sm: "0.75rem",
				base: "1rem",
				lg: "1.5rem",
				xl: "2rem",
				xxl: "2.5rem",
				"3xl": "3rem",
				"4xl": "3.5rem",
			},
		},
	},
	plugins: [],
};
