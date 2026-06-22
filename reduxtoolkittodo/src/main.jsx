// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    {/* yaha jo waha ham value = likhte the yaha pe use store kehte hai aur hamare store ka nam bhi store hai toh {store}   */}
    <App /> 
  </Provider>,
)
