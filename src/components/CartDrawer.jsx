import React from "react";
import CartCard from "./Card/CartCard.jsx";
import AnimatedBtn from "./Button/AnimatedBtn.jsx";
import AppString from "../utils/const/AppString.jsx";

function CartDrawer({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`
        fixed top-20 right-0 z-50
        w-[92vw] sm:w-[380px]
        max-h-[80vh]
        bg-white rounded-2xl shadow-xl
        overflow-hidden
    
        transform transition-all duration-400 ease-out
        origin-top
    
           ${open ? "scale-y-100 mr-4 sm:mr-6 md:mr-16" : "scale-y-0 mr-0"}

        `}
      >
        {/* FLEX COLUMN LAYOUT */}
        <div className="flex flex-col max-h-[80vh]">

          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b shrink-0">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* SCROLLABLE ITEMS AREA */}
          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-4
            "
          >
            {/* ~2.5 items visible naturally */}
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>

          {/* FOOTER (AUTO-GROWS DOWN) */}
          <div className="border-t p-4 space-y-3 shrink-0">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>€45.29</span>
            </div>

            <AnimatedBtn className="w-full py-2">
              {AppString.VIEW_CART}
            </AnimatedBtn>

            <AnimatedBtn className="w-full py-2">
              {AppString.CHECKOUT}
            </AnimatedBtn>

            {/* You can add MORE buttons safely */}
            {/* <AnimatedBtn className="w-full py-2">COUPON</AnimatedBtn> */}
          </div>

        </div>
      </div>
    </>
  );
}

export default CartDrawer;
