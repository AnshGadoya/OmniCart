import React from 'react'

function Card() {
    return (
        <div className='border h-full w-full max-w-sm rounded-lg shadow-md bg-white hover:scale-105 transition-transform duration-200'>
            <img className='rounded-t-lg h-48 w-full object-cover' src="https://via.placeholder.com/400x300" alt="Product Image"/>
            <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Product Title</h3>
                <p className='text-gray-600 mb-4'>This is a brief description of the product.</p>
                <div className='flex items-center justify-between'>
                    <span className='text-lg font-bold'>$29.99</span>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-150'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card
