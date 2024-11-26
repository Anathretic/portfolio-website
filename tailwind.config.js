export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	mode: 'jit',
	theme: {
		extend: {
			screens: {
				rrsm: '300px',
				rsm: '350px',
				mobile: '500px',
				mf: '990px',
			},
			keyframes: {
				'slide-in': {
					'0%': {
						'-webkit-transform': 'translateX(120%)',
						transform: 'translateX(120%)',
					},
					'100%': {
						'-webkit-transform': 'translateX(0%)',
						transform: 'translateX(0%)',
					},
				},
			},
			animation: {
				'slide-in': 'slide-in 0.5s ease-out',
			},
			boxShadow: {
				custom: '3px 5px 20px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	variants: {
		extend: {},
	},
};
