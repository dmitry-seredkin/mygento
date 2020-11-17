import React, { useEffect } from 'react'

import { StylesProvider } from '@material-ui/core/styles'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  )
}

export default MyApp
