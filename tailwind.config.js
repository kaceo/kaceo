const colors = require('tailwindcss/colors')

module.exports = {
  //plugins to use
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  //purge unused styles
  content: [
    './source/**/*.{md,pug,njk}',
    './pages/**/*.{md,pug,njk}',
    //'./_site/**/*.html',
  ],

}



/*
  //themes to apply
  theme: {
  },
  //force these safelist, blocklist
  safelist: [
  ],
  screens: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  theme: {
    colors: {
      'primary':   'rgb(7 35 68)',
      'secondary': 'rgb(0 170 161)',
      'white':     'rgb(255 255 255)',
    },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'blockquote': {
              fontWeight: 'normal',
              color: theme('colors.slate.600')
            },
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            }
          }
        }
      })
    },
  },
*/
