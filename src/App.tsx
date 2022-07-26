import { FC } from 'react'
import PropTypes from 'prop-types'

import { globalStyles, getCssText } from '$styles'

import Title from '$components/Title'

const App: FC<{
  text: string
}> = ({ text }) => {
  globalStyles()

  return (
    <section>
      <Title>{text}</Title>

      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </section>
  )
}

App.propTypes = {
  text: PropTypes.string.isRequired
}

export default App
