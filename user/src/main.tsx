import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
        defaultTheme="dark"
        storageKey="emotract-user-theme"
      >
      <App />
    </ThemeProvider>
  </StrictMode>,
)
