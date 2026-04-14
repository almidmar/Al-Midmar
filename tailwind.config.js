/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#c4161c",
        "accent-red": "#c4161c",
        "accent-dark": "#7a0c10",
        "background-light": "#ffffff",
        "background-dark": "#f9fafb",
        "card-bg-light": "#ffffff",
        "card-bg-dark": "#f3f4f6",
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "1rem",
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
