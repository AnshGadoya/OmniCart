import React from 'react'

import {Routes, Route} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import LayoutHF from "./layout/LayoutHF.jsx";

const App = () => {
    return (
        //overflow-y-scroll no-scrollbar is use to remove the scrollbar but keep the scroll functionality
        <div
            id="main-scroll"
            className='h-screen overflow-y-scroll no-scrollbar'>
            <Routes>
                <Route element={ <LayoutHF children={ <HomeScreen/>}/> } path="/" />
            </Routes>

        </div>
    )
}
export default App
