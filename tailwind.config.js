/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#111213',
      'dark-gray': '#212224',
      'light-gray': '#a1a1a1',
      'white': '#ffffff',
      'dark-blue': '#2f71e8',
      'light-blue': '#29b9f0'
    }
  },
  plugins: [],
};
