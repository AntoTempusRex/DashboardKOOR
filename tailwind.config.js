/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				unj: ["Praise"],
				unjpoppins: ["Poppins"],
			},

			screens: {
				desktop: "1280px",
			},
			backgroundImage: {
				unjbg: "url('./img/loginbg.png')",
			},
			borderRadius: {
				chonk: "20px",
				"10pixel": "10px",
			},
			colors: {
				ijounj: "#266B45",
				putihkotor: "#D9D9D9",
				buttonunj: "#305067",
				unjboard: "#BCCFDD",
				sidebarunj: "#305067",
				dimas: "#6B7D21",
			},
			opacity: {
				76: "76%",
				67: "67%",
			},
			borderWidth: {
				"80%": "100px",
			},
			dropShadow: {
				"3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
			},
			gridTemplateColumns: {
				sidebar: "1.5fr 1fr 1fr 1fr 1fr",
				testcol: "280px 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
				contentcol: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
				contentcolpinjaman: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
				contentcoldlm: "1fr 1fr",
			},
			gridTemplateRows: {
				MainMenuHead: "82px 1fr",
				testrow: "80px 1fr 1fr 1fr 1fr 1fr 1fr 80px",
				contentrowpinjaman: "1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr",
				contentrow: "1fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr",
				contentrowdlm: "1fr 1fr",
			},
			blur: {
				ssm: '1px',
			},
			boxShadow: {
				'all-side': '-10px -10px 30px 4px rgba(0, 0, 0, 0.3)',
			},
		},
	},
};
