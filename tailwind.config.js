// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizdeki tüm JS/JSX/TS/TSX dosyalarını tarar
    "./public/index.html", // HTML dosyasını da tarar
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Sarı
        secondary: "#000000", // Siyah
        background: "#FFFFFF", // Beyaz
      },
    },
  },
  variants: {},
  plugins: [],
};