import {FaHeart, FaExchangeAlt} from "react-icons/fa";
import {useState} from "react";

function EyeView({open, item, onClose}) {
    const [qty, setQty] = useState(1);
    if (!open || !item) return null;

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40 z-110" onClick={onClose}/>

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-xl  max-w-[100vh] max-h-[75vh] p-8 relative overflow-hidden">

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-xl text-gray-500 hover:text-black"
                    >
                        ×
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1.4fr] gap-10 h-full items-start">

                        {/* LEFT */}
                        <div className="flex flex-col h-full">
                            <div className="bg-gray-100 rounded-xl flex justify-center items-center h-[70%]">
                                <img src={item.prev_image} className="h-full object-contain rounded-xl"/>
                            </div>

                            <div className="flex gap-4 mt-5">
                                {[1, 2, 3, 4].map(i => (
                                    <div
                                        key={i}
                                        className="w-20 h-20 bg-gray-100 rounded-xl flex justify-center items-center cursor-pointer"
                                    >
                                        <img
                                            src={item.hover_image}
                                            className="h-full w-full object-contain rounded-xl"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col justify-start">
                            <h2 className="text-2xl font-semibold">{item.title}</h2>

                            <div className="flex items-center gap-4 mt-2">
                                <span className="text-red-500 text-xl font-semibold">€{item.price || "19.50"}</span>
                                <span className="line-through text-gray-400">€{item.oldPrice || "22.50"}</span>
                            </div>

                            <div className="flex text-yellow-400 mt-2 text-sm">
                                ★ ★ ★ ★ ★
                            </div>

                            <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
                                {item.description || "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."}
                            </p>

                            <hr className="my-6"/>

                            <div className="flex items-center gap-4">

                                {/* Quantity */}
                                <div className="flex border rounded-xl">
                                    <button className="px-4 py-2" onClick={() => setQty(q => Math.max(1, q - 1))}>-
                                    </button>
                                    <div className="px-4 py-2">{qty}</div>
                                    <button className="px-4 py-2" onClick={() => setQty(q => q + 1)}>+</button>
                                </div>

                                {/* Add to cart */}
                                <button
                                    className="bg-gray-900 text-white px-10 py-3 font-medium rounded-xl hover:bg-black">
                                    ADD TO CART
                                </button>

                                {/* Icons */}
                                <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer"/>
                                <FaExchangeAlt className="text-gray-500 cursor-pointer"/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EyeView;
