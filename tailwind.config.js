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
        "primary-400": "#D6E9FF",
        "primary-500": "#C1D2E6",
      },
    },
  },
  plugins: [],
};
