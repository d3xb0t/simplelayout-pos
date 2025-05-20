import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Application from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { rootReducer } from './redux/rootReducer.js'

const reducer = combineReducers({
    root: rootReducer
})

const preloadState = {
    root: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
    }
}

const store = configureStore({
    reducer: reducer,
    preloadedState: preloadState
})

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Application />
    </Provider>
)
