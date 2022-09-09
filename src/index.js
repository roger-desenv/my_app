import React from 'react'
import ReactDOM from 'react-dom/client'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


import App from './App'
import './index.css'
import { grey, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: amber[500],
    },
  },
})

/*
createRoot.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App /> 
    </ThemeProvider>
  </React.StrictMode>,
)
