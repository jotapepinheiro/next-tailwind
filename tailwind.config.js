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
        'dark-light': '#182237',
        'dark-lighter': '#2a3849',
      },
      backgroundImage: {
        'textura-light': "url('/images/textura.svg')",
        'textura-dark': "url('/images/textura_dark.svg')",
      },
      width: {
        main: '760px',
      },
      animation: {
        'count-5': 'countdown 5s linear forwards',
        'count-10': 'countdown 10s linear forwards',
        'count-20': 'countdown 20s linear forwards',
        'count-30': 'countdown 30s linear forwards',
        'count-40': 'countdown 40s linear forwards',
        'count-50': 'countdown 50s linear forwards',
        'count-60': 'countdown 60s linear forwards',
        wiggle: 'wiggle 200ms ease-in-out',
      },
      keyframes: {
        countdown: {
          from: {
            strokeDashoffset: '0',
          },
          to: {
            strokeDashoffset: '-722px',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
};
