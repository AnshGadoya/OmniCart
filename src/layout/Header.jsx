import React, { useEffect, useState } from 'react'
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import AppString from '../utils/const/AppString.jsx';
import CartDrawer from "../components/CartDrawer.jsx";


function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollContainer = document.getElementById("main-scroll");

        const onScroll = () => {
            setScrolled(scrollContainer.scrollTop > 0);
        };

        scrollContainer.addEventListener("scroll", onScroll);

        return () => {
            scrollContainer.removeEventListener("scroll", onScroll);
        };
    }, []);

    const [openCart, setOpenCart] = useState(false);

    useEffect(() => {
        if (openCart) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openCart]);

    return (
        <header
            className={`shadow-md 
        transition-all duration-300 ease-in-out mb-1
        ${scrolled ? "h-16" : "h-24 "}
      `}
        >
            <div
                className={`h-full  bg-white flex justify-around items-center
                  transition-all duration-300 ease-in-out mx-1
                  ${scrolled ? "py-2" : "py-6"}`}
            >
                {/* Logo */}
                <div>
                    <h1
                        className={`font-bold text-gray-800 transition-all duration-300 
                         ${scrolled ? "text-2xl" : "text-3xl"}`}
                    >
                        {AppString.APP_NAME}
                    </h1>
                </div>

                {/* Search bar */}
                <div
                    className=' mx-2
                    bg-gray-200 w-2/4 rounded-2xl flex items-center px-4 shadow-md font-medium
                    transition-all duration-300
                    ${scrolled ? "py-1" : "py-2"}
          '
                >
                    <FaSearch/>
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="w-full bg-transparent p-2 focus:outline-none"
                    />
                </div>

                {/* Icons */}
                <div className="flex space-x-6 text-2xl">
                    <MdOutlineCompareArrows className="cursor-pointer"/>
                    <FaRegHeart className="cursor-pointer"/>
                    <GrCart className="cursor-pointer" onClick={() => setOpenCart(true)}/>
                    <CgProfile className="cursor-pointer"/>
                </div>
                <CartDrawer open={openCart} onClose={() => setOpenCart(false)}/>
            </div>
        </header>
    );
}

export default Header;
