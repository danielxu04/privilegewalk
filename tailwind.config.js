/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        latoRegular: ["Lato Regular", "sans-serif"],
        latoBold: ["Lato Bold", "sans-serif"],
        latoThin: ["Lato Thin", "sans-serif"], 
        interRegular: ["Inter Regular", "sans-serif"],
        interMedium: ["Inter Medium", "sans-serif"], 
        interBold: ["Inter Bold", "sans-serif"], 
        interSemiBold: ["Inter SemiBold", "sans-serif"], 
        interThin: ["Inter Thin", "sans-serif"],
        montserratRegular: ["Montserrat Regular", "sans-serif"],
        montserratMedium: ["Montserrat Medium", "sans-serif"],
        montserratBold: ["Montserrat Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
