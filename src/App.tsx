import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Box>Hi</Box>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
