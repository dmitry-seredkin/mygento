import React from 'react'

import { StylesProvider } from '@material-ui/core/styles'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  )
}

export default MyApp
