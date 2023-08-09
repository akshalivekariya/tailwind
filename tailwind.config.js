/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'pinki1':'#fcb2c8',
      }
    },
    container:{
      screens:{
        sm:'540px',
        md:'720px',
        lg:'960px',
        xl:'1140px',
        '2xl':'1320px'
      }
    }
  },
  plugins: [],
}
