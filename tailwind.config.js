/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "350px",
        xs: "450px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        greenPrimary: '#3B8A3B',
        greenDark: '#2E6B2E',
        yellowGold: '#E9A625',
        brownWarm: '#A86F12',
        textDark: '#3E2E12',
        beigeLight: '#FDF7EF',
        white: '#FFFFFF',
      },
      boxShadow: {
        custom: '0 4px 8px rgba(43, 122, 43, 0.2)',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
