module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				fade: "rgba(0, 0, 0, 0.3)",
				border: "#525252",
				content: "#0d0d0d",
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
