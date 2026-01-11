import React from 'react'

import {Routes, Route} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import LayoutHF from "./layout/LayoutHF.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route element={ <LayoutHF children={ <HomeScreen/>}/> } path="/" />
            </Routes>

        </>
    )
}
export default App
