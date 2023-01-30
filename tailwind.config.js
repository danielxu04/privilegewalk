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
    screens: {
      '2xs': '360px',
      'iPhone12': '390px',
      '1.5xs': '414px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '840px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1400px',
      '4xl': '1540px',
      '5xl': '1800px'
    },
  },
  plugins: [],
}
