import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ApiContex from './ApiContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiContex>
      <App />
    </ApiContex>
  </StrictMode>,
)
