module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"primario-purple": "#8F00FF",
				"primario-red": "#FA3131",
				"primario-gray": "#8D8D8D",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
