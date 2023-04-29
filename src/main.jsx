import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoadContextProvider } from './context/load'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadContextProvider>
      <App />
    </LoadContextProvider>
  </React.StrictMode>,
)
