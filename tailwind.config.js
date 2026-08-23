/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f6',
          100: '#d6e0ea',
          400: '#3d5a7d',
          500: '#1f3b5c',
          600: '#16304e',
          700: '#0f2440',
          800: '#0b1c33',
          900: '#081527',
        },
        brand: {
          red: '#E1483C',
          redDark: '#C93B30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}

