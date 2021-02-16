module.exports = {
	purge: ['./src/**/*.tsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				104: '26rem',
				168: '42rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
