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
        whiteblurry: 'rgb(255, 255, 255, 76%)',
        buttonunj: '#305067',
        unjboard: '#BCCFDD',
        sidebarunj: '#305067'
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
        MainMenuHead: '80px 1fr',
      },

    },
    
  },
  plugins: [],
}

