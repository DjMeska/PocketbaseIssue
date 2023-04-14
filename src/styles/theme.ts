import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: `Economica, regular`,
  },
  colors: {
    black: '#000',
    white: '#fff',
    grey: '#ADADAD',
    sand: '#B89C61',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#212121',
        color: '#FFFFFF',
      },
      a: {
        fontWeight: 'bold',
      },
      button: {
        fontWeight: 'bold',
      },
    },
  },
})
