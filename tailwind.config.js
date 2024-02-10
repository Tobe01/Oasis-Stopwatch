/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        '10%': '10%',
        '25%': '25%',
        '33%': '33%',
        '60%': '60%',
        '65%': '65%',
        '68%': '68%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },width: {
        '25%': '25%',
        '40px': '40px',
        '50px': '50px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '100px': '100px',
        '200px': '200px',
        '387px': '387px',
        '400px': '400px',
      }, colors: {
        brightRed: 'rgb(12, 88%, 59%)',
        brightRedLight: 'rgb(12, 88%, 69%)',
        brightRedSupLight: 'rgb(12, 88%, 95%)',
        darkBlue: 'rgb(228, 39%, 23%)',
        darkGrayishBlue: 'rgb(227, 12%, 61%)',
        veryDarkBlue: 'rgb(223, 12%, 13%)',
        veryPaleRed: 'rgb(13, 100%, 96%)',
        veryLightGray: 'rgb(0, 0%, 98%)',
      },
    },extend: {
       fontSize: {
        '14px': '14px',
        '38px': '38px',
        '40px': '40px',
       }
    }
  },
  plugins: [],
}

