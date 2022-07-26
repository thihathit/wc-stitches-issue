import { createStitches } from '@stitches/react'

const styling = createStitches({
  theme: {
    colors: {
      red: 'red'
    },

    fontSizes: {
      title: '1.5em'
    }
  }
})

export const { styled, getCssText, globalCss, css, keyframes, createTheme } =
  styling
