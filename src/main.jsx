import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {WishlistProvider} from "./context/WishlistContext.jsx";

// Disable automatic scroll restoration behavior
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <WishlistProvider>
            <App/>
        </WishlistProvider>
    </BrowserRouter>
)
