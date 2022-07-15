import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import calcReducer from './features/calculatorSlice'
import themeReducer from './features/theme'

const store = configureStore({
  reducer: {calculator: calcReducer,
            theme: themeReducer, 
          },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
)

reportWebVitals()
