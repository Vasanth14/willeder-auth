import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { MantineProvider } from '@mantine/core'
import { theme } from './styles/Mantine/mantine.theme'
import CustomFonts from './styles/Mantine/CustomFonts/CustomFonts'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      <CustomFonts />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
)
reportWebVitals()
