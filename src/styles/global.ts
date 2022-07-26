import appCSS from './app'
import fontsCSS from './fonts'
import resetCSS from './reset'

export const globalStyles = () => [resetCSS(), fontsCSS(), appCSS()].join('')

export default globalStyles
