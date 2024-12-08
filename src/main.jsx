import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from "./reportWebVitals";
// import ReactDOM from "react-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

reportWebVitals();