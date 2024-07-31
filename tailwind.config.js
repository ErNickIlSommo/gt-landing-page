/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom-in': 'zoom-in 0.3s ease-in-out forwards',
      },
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
      scale: ['hover'],
    },
  },
  plugins: [],
}

