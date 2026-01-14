import {FaHeart, FaRegEye, FaRegHeart} from "react-icons/fa";
import { useWishlistContext } from "../context/WishlistContext.jsx";

function Card({item}) {

      const { wishlist, toggleWishlist } = useWishlistContext();
      const liked = wishlist[item.id];

    return (
        <div className="w-72 bg-white rounded-xl overflow-hidden shadow-md group">

            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden">

                {/* DEFAULT IMAGE */}
                <img
                    src="https://img.freepik.com/free-photo/attractive-girl-looking-fun-portrait-slender-caucasian-female-trendy-sweater-holding-hands-head-smiling-broadly-posing-camera-being-good-mood_176420-13719.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="product"
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                {/* HOVER IMAGE */}
                <img
                    src="https://media.gettyimages.com/id/2252729390/video/paris-france-diane-batoukina-wears-light-brown-hair-tucked-under-a-ribbed-beige-knit-beanie.jpg?s=640x640&k=20&c=u9xzx8JU06xQAvHh68PE6HmsUUiMRyg3W84ZGc-0iTI="
                    alt="product-hover"
                    className="absolute inset-0 w-full h-80 object-cover opacity-0 scale-110 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                />

                {/* BADGES */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">-40%</span>
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">New</span>
                </div>

                {/* ACTION BAR */}
                <div
                    className="absolute bottom-0 left-0 w-full h-14 bg-purple-500 flex
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-500 overflow-hidden">

                    {/* BUTTON 1 */}
                    <button
                      className="
                        w-14 flex items-center justify-center text-white
                      transform translate-y-4 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300 delay-100
                      hover:bg-white hover:text-purple-600
                      "
                      onClick={() => toggleWishlist(item.id)}
                    >

                        {liked ? (
                            <FaHeart className="text-red-500 cursor-pointer"/>
                        ) : (
                            <FaRegHeart className='cursor-pointer'/>
                        )}
                    </button>


                    {/* BUTTON 2 */}
                   <button
                      className="
                       flex-1 flex items-center justify-center gap-2
                      text-white border-l border-r border-purple-300
                      transform translate-y-4 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300 delay-200
                      hover:bg-white hover:text-purple-600
                      font-medium
                      "
                    >
                      Add to Cart
                   </button>


                    {/* BUTTON 3 */}
                   <button
                      className="
                        w-14 flex items-center justify-center text-white
                          transform translate-y-4 opacity-0
                          group-hover:translate-y-0 group-hover:opacity-100
                          transition-all duration-300 delay-300
                          hover:bg-white hover:text-purple-600
                      "
                    >
                      <FaRegEye />
                   </button>

                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-medium">Lorem ipsum jacket</h3>

                {/* RATING */}
                <div className="flex justify-center gap-1 text-yellow-400 my-2">
                    ★ ★ ★ ★ ★
                </div>

                {/* PRICE */}
                <p className="text-sm">
                    <span className="font-semibold">€10.47</span>
                    <span className="line-through text-gray-400 ml-2">€17.45</span>
                </p>
            </div>
        </div>

    )
}

export default Card
