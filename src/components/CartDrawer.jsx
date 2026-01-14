import React from 'react'
import CartCard from "./CartCard.jsx";


function CartDrawer({open, onClose}) {
    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/10 z-40"
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-24 right-0 md:right-36 z-50 
  h-[70vh] md:h-1/2 
  w-[90vw] sm:w-[380px] 
  bg-white rounded-2xl shadow-xl overflow-hidden
  transform transition-transform duration-300 
  ${open ? "translate-x-0" : "translate-x-[calc(100%+9rem)]"}`}
            >
                <div className="flex h-full flex-col">

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b shrink-0">
                        <h2 className="text-lg font-semibold">Shopping Cart</h2>
                        <button onClick={onClose} className="text-xl font-bold">×</button>
                    </div>

                    {/* Scrollable content (65% height) */}
                    <div className="h-[65%] overflow-y-auto p-4 space-y-4">
                        {/* items */}

                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>


                    </div>

                    {/* Footer */}
                    <div className="border-t p-4 space-y-3 bg-white shrink-0">
                        <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>€45.29</span>
                        </div>
                        <button className="w-full border py-2 hover:bg-gray-100 font-medium">VIEW CART</button>
                        <button className="w-full border py-2 hover:bg-gray-100 font-medium">CHECKOUT</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CartDrawer
