import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebComponent from 'react-to-webcomponent'

import App from '$root/App'

const Webcomponent = reactToWebComponent(App, React, ReactDOM, {
  shadow: true,
  dashStyleAttributes: true
})

customElements.define('app-container', Webcomponent)
