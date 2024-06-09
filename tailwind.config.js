
export default {
  content: [
    './*.{html,js}', 
    './src/**/*.{html,js}'
  ],
  darkMode:'class',
  screens:{
    sm:'480px',
    md:'767px',
    lg:'1020px',
    xl:'1440px'
  },
  theme: {
    extend: {
      colors:{
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        darkishBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily:{
        sans:['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

