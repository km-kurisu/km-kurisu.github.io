/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        aktura:"aktura",
        burtons:"burtons",
        arrayw:"array-w",
        arrayr:"array-r",
        arrayb:"array-b",
        nippo:"Nippo-Bold",
      }
    },
  },
  plugins: [],
}