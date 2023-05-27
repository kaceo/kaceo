module.exports = {
  content: [
    './pages/**/*.{md,pug,njk}',
    './sources/**/*.{md,pug,njk}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  screens: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
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
  variants: {},
}
