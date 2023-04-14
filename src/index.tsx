import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'
import { App } from './App'
import 'index.css'

if (window.location.protocol !== 'https:' && process.env.REACT_APP_PRODUCTION === 'true') {
  window.location.replace(
    `https:${window.location.href.substring(window.location.protocol.length)}`,
  )
} else {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  )
}
