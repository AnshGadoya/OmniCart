import React from 'react'
import {FaSearch} from "react-icons/fa";
import {MdOutlineCompareArrows} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import AppString from '../utils/const/AppString.jsx';
import { FaHeart } from "react-icons/fa";



function Header() {
    return (
        <div className='h-full bg-white shadow-md flex justify-around items-center p-4 py-6 '>
            <div>
                <h1 className='text-3xl font-bold  text-gray-800'>{AppString.APP_NAME}</h1>
            </div>
            {/*search bar*/}
            <div className='bg-gray-200 w-2/4 border-gray-400 rounded-2xl flex items-center px-4 shadow-md'>
                <FaSearch/>
                <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full p-2 rounded-2xl focus:outline-none"
                />
            </div>
            <div className='flex space-x-6 text-2xl'>
                <MdOutlineCompareArrows/>
                <FaRegHeart />
                {/*<FaHeart /> fill heart*/}
                <GrCart />
                <CgProfile/>
            </div>

        </div>
    )
}

export default Header
