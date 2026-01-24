import React, {useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import slides from "../utils/const/slide.js";
import AppString from "../utils/const/AppString.jsx";
import WordBtn from "../components/Button/WordBtn.jsx";
import AnimatedBtn from "../components/Button/AnimatedBtn.jsx";

function SlideShow() {
    const [current, setCurrent] = useState(0);
    const slide = slides[current];

    return (
        <section className="w-full h-[40vh] lg:h-[50vh] bg-[#dffefe] relative overflow-hidden">

            {/* Content */}
            <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">

                {/* LEFT TEXT */}
                <div className="max-w-[55%]">
                    <p className="text-sm md:text-lg mb-2 md:mb-4">
                        {slide.tag}
                    </p>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {slide.title1}
                        <br/>
                        {slide.title2}
                    </h1>

                <AnimatedBtn className='mt-2' children={AppString.SHOP_NOW}/>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex items-center justify-center pointer-events-none">

                    {/* Circle */}
                    <div className="absolute
                        w-[220px] h-[220px]
                        md:w-[320px] md:h-[320px]
                        lg:w-[360px] lg:h-[360px]
                        bg-[#b9f5f2] rounded-full z-0"
                    />

                    {/* Image */}
                    <img
                        src={slide.image}
                        alt="product"
                        className="relative z-10
                          w-[180px]
                          md:w-[320px]
                          lg:w-[420px]
                          object-contain"
                    />
                </div>
            </div>

            {/* LEFT ARROW */}
            <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2
               text-3xl md:text-4xl text-gray-600 hover:text-black
               z-50"
                onClick={() =>
                    setCurrent(prev => prev === 0 ? slides.length - 1 : prev - 1)
                }
            >
                <MdKeyboardArrowLeft/>
            </button>

            {/* RIGHT ARROW */}
            <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2
               text-3xl md:text-4xl text-gray-600 hover:text-black
               z-50"
                onClick={() =>
                    setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1)
                }
            >
                <MdKeyboardArrowRight/>
            </button>

        </section>
    );
}

export default SlideShow;
