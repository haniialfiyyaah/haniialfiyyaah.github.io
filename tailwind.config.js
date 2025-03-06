/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: "blob 10s infinite",
        'float-0': 'float 8s ease-in-out infinite',
        'float-1': 'float 12s ease-in-out infinite',
        'float-2': 'float 16s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px)',
          },
          '50%': {
            transform: 'translateY(-40px) translateX(-10px)',
          },
          '75%': {
            transform: 'translateY(-20px) translateX(8px)',
          },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} 