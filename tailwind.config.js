/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dara: {
          black: "#000000",
          dark: "#0B0C0E",
          strip: "#191919",
          cream: "#EFEDE3",
          beigeRak: "#EBE7D6",
          beigeLand: "#E9E5D2",
          textDark: "#1A1A1A",
          muted: "#666666",
        }
      },
      fontFamily: {
        heading: ["Syne", "Gilroy-Bold", "sans-serif"],
        body: ["Switzer", "Gilroy-Regular", "sans-serif"],
      },
      borderRadius: {
        'pill': '9999px',
        'card': '24px',
      }
    },
  },
  plugins: [],
}
