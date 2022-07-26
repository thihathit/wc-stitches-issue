import { ComponentProps } from '@stitches/react'
import { globalCss, styled } from './config'

export const appCSS = globalCss({
  '*': {
    boxSizing: 'border-box'
  },

  'html, body': {
    width: '100%',
    height: '100%'
  },

  body: {
    color: '$text',

    backgroundColor: '$canvas',
    overflowY: 'auto',
    overflowX: 'hidden',

    scrollBehavior: 'smooth',

    '&.no-scroll': {
      overflow: 'hidden'
    }
  },

  'img, svg': {
    verticalAlign: 'baseline'
  },

  '.nowrap': {
    whiteSpace: 'nowrap'
  }
})

const Tag = styled('div')

export type AppCSS = ComponentProps<typeof Tag>['css']

export default appCSS
