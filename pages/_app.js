import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  const AppContext = React.createContext();

  return (
    <AppContext.Provider value={{}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
