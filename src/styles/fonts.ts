import { globalCss } from '.'

export const fontsCSS = globalCss({
  '@import':
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',

  html: {
    fontFamily: `Poppins`,

    fontSize: '1em',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 1.2222222222222223
  },

  'input, textarea, option, select, button': {
    font: 'inherit',
    fontFamily: 'inherit'
  },

  'b, strong': {
    fontWeight: '$one-bold'
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'inherit'
  }
})

export default fontsCSS
