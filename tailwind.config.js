/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#00AB0E",
					hover: "#00790A",
					disabled: " rgba(0, 171, 14, 0.13)",
					border: "#00AB0E",
				},
			},
		},
	},
	plugins: [],
};
