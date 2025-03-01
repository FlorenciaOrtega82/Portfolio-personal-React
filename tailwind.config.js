/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background:'#141414',
      secondaryBackground: '#2D3858',
      primary: '#E6E6E2',
      secondary: '#9996D9',
      hoverColor: '#E3DF8C',
      secondaryHover:'#627ABC',
      secondaryColor: '#435B9D',
    },
  },
  plugins: [],
}
