import '../styles/globals.css'
import React from 'react'
import { AppWrapper } from '../data/context'

function MyApp({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
