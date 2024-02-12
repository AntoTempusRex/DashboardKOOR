/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'unj': ['Praise'],  
        'unjpoppins': ['Poppins'],  
      },
      
      screens: {
        'desktop': '1280px',
      },
      backgroundImage: {
        'unjbg': "url('./img/loginbg.png')",
      },
      borderRadius: {
        'chonk': '20px',
        '10pixel': '10px',
      },
      colors: {
        ijounj: '#266B45',
        putihkotor: '#D9D9D9',
        buttonunj: '#305067',
        unjboard: '#BCCFDD',
        sidebarunj: '#305067',
        dimas: '#6B7D21',
      },
      opacity: {
        '76': '76%',
        '67': '67%',
      },
      borderWidth: {
        '80%': '100px',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateColumns: {
        sidebar: '300px 1fr'
      },
      gridTemplateRows: {
        MainMenuHead: '82px 1fr',
      },
      gridColumn: {
        'header': '2 / 3',
        'sidebar': '1 / 2',
        'main': '2 / 3',
      },
      gridRow: {
        'header': '1 / 2',
        'foot': '1 / 4',
        'sidebar': '1 / 3',
        'main': '2 / 3',
      },


    },
    
  },
  plugins: [require("daisyui")],
}

