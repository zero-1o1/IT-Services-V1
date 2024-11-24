/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Ult: '#5363EE',
        Jet: '#111430',
        Ultjet: '#2A3277',
        DarkDB: '#0E1A27',
        Lgreen: '#C2F750',
        DarkP: '#3545D6',
        termbrn: '#2B1B0B',
        TermDrkBrn: '#1D1307',
        TermTxtGld: '#FFA129',
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.6)", // Yellow glow
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.6)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(255, 255, 0, 1), 0 0 30px rgba(255, 255, 0, 0.8)",
          },
        },
      },
      animation: {
        glow: "glow 1.5s infinite",
      },
    },
  },
  plugins: [],
};