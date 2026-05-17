import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext/DarkModeContext'
import './main.css'
import App from './App.jsx'

function ThemedApp() {
  const { darkMode } = useDarkMode()

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#97ce4c',
      },
      secondary: {
        main: '#00d4ff',
      },
      background: {
        default: darkMode ? '#0a0a14' : '#f5f5f5',
        paper:   darkMode ? '#0d1117' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h4: { fontWeight: 700 },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <ThemedApp />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
