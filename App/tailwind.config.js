/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'easypath-blue': '#007bff',
				'darkgreen': '#194c13',
				'midgreen': '#319013',
				'lightgreen': '#52cc26',
			},
		}
	},
	plugins: []
};
