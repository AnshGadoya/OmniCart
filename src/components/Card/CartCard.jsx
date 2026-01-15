import React from 'react'

function CartCard() {
    return (
        <div className="flex gap-4 border-b pb-4">
            <div className="w-16 h-16 bg-gray-200 rounded"/>
                <div className="flex-1">
                    <p className="font-medium">Lorem ipsum chair three</p>
                    <p className="text-sm">Qty: 1</p>
                    <p className="font-semibold">€10.00</p>
                </div>
            <span className="text-purple-500 cursor-pointer">×</span>
        </div>
    )
}

export default CartCard
