module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans', sans-serif",
      },
      colors: {
        dark: "#3D3D3D",
        darker: "#333333",
        primary: "#D6E9FF",
      },
    },
  },
  plugins: [],
};
