import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  { PersonContextProvider } from './contexts/Person.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
  </StrictMode>,
)
