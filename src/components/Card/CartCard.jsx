import React from 'react'

function CartCard() {


    return (
        <div className="flex gap-4 border-b pb-4">
            <div>
                <img
                    className="w-16 h-16 bg-gray-200 rounded object-cover"
                    src="https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI="
                    alt="product"
                />
            </div>

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
