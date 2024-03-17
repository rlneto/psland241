import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import shared from './styles/Shared.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className={`${shared.body}`}/>
  </React.StrictMode>,
)
