module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#111827',
        'dark-light': '#1f2d3d',
        'dark-lighter': '#2a3849',
      },
      backgroundImage: {
        'textura-light': "url('/images/textura.jpg')",
        'textura-dark': "url('/images/textura_dark.jpg')",
      },
      width: {
        main: '760px',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
