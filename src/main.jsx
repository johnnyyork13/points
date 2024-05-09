import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './state/store.ts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>
  </HashRouter>,
)
