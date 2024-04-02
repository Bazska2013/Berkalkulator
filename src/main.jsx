import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaxStateProvider from "./state/TaxState.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TaxStateProvider>
          <App />
      </TaxStateProvider>
  </React.StrictMode>,
)
