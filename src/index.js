import React from 'react'
import { createRoot } from 'react-dom/client'

import { CatProvider } from './context'
import App from './App'

import './index.css'

const container = document.getElementById('_app')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <CatProvider>
      <App />
    </CatProvider>
  </React.StrictMode>,
)
