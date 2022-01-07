module.exports = {
	theme: {
		fontFamily: {
			sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
		},
		extend: {
			colors: {
				primary: {
					200: "#E0F3F5",
					400: "#CDECEE",
					600: "#80CED5",
					800: "#31B5D4",
					900: "#117F97",
				},
				attention: "#EC471A",
				warning: "#F3C227",
			},
		},
	},
	variants: {},
	plugins: [],
	content: ["./src/**/*.{njk,html,js}"],
};
