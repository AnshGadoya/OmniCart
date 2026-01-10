import React from 'react'

import {Routes, Route} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route element={ <HomeScreen /> } path="/" />
            </Routes>

        </>
    )
}
export default App
