module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				fade: "rgba(0, 0, 0, 0.3)",
				border: "#525252",
			},
			fontSize: {
				xss: "0.6rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
