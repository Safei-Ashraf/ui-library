/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/*"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#00AB0E",
					hover: "#00790A",
					disabled: " rgba(0, 171, 14, 0.13)",
					border: "rgba(0, 171, 14, 0.7)",
				},
				secondary: {
					DEFAULT: "#0093AD",
					hover: "#00687B",
					disabled: "rgba(0, 147, 173, 0.13)",
					border: " rgba(0, 147, 173, 0.7)",
				},
				neutral: {
					DEFAULT: "#3E413F",
					light: "rgba(62, 65, 63, 0.6)",
					lighter: "rgba(62, 65, 63, 0.3)",
					fade: " rgba(62, 65, 63, 0.1)",
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
			},
		},
	},
	plugins: [],
};
