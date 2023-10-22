/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ppns: [ 'Poppins', 'sans-serif'],
        pm: ['Permanent Marker', 'cursive']
         
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

