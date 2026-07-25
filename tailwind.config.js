/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: { light: '#E1F5EE', DEFAULT: '#1D9E75', dark: '#0F6E56' },
      },
      keyframes: {
        respira: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        celebra: {
          '0%,100%': { transform: 'translateY(0) rotate(0)' },
          '25%': { transform: 'translateY(-30px) rotate(-5deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '75%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        preocupa: {
          '0%,100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        respira: 'respira 3s ease-in-out infinite',
        celebra: 'celebra 0.9s ease-in-out',
        preocupa: 'preocupa 0.5s ease-in-out 2',
      },
    },
  },
  plugins: [],
}
