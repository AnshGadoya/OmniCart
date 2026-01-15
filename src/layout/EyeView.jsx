import { FaHeart, FaExchangeAlt } from "react-icons/fa";
import { useState } from "react";

function EyeView({ open, item, onClose }) {
  const [qty, setQty] = useState(1);

  if (!open || !item) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6">
        <div
          className="
            bg-white rounded-xl
            w-full
            max-w-[95vw] sm:max-w-4xl lg:max-w-5xl
            max-h-[90vh]
            relative
            overflow-y-auto no-scrollbar
            p-4 sm:p-6 lg:p-8
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6
                       text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          {/* Content Grid */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[0.8fr_1.2fr]
              gap-6 sm:gap-8 lg:gap-10
            "
          >
            {/* LEFT - Images */}
            <div className="flex flex-col">
              <div
                className="
                  bg-gray-100 rounded-xl
                  flex justify-center items-center
                  h-[240px] sm:h-[300px] md:h-[340px]
                "
              >
                <img
                  src={item.hover_image}
                  alt={item.title}
                  className="max-h-full object-contain rounded-xl"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="
                      min-w-[64px] h-16
                      bg-gray-100 rounded-lg
                      flex justify-center items-center
                      cursor-pointer
                    "
                  >
                    <img
                      src={item.hover_image}
                      alt="thumb"
                      className="h-full w-full object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Product Info */}
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {item.title}
              </h2>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-red-500 text-lg sm:text-xl font-semibold">
                  €{item.price || "19.50"}
                </span>
                <span className="line-through text-gray-400">
                  €{item.oldPrice || "22.50"}
                </span>
              </div>

              <div className="flex text-yellow-400 mt-2 text-sm">
                ★ ★ ★ ★ ★
              </div>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.description ||
                  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."}
              </p>

              <hr className="my-5" />

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Quantity */}
                <div className="flex border rounded-xl">
                  <button
                    className="px-3 py-2"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <div className="px-4 py-2">{qty}</div>
                  <button
                    className="px-3 py-2"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  className="
                    bg-gray-900 text-white
                    px-6 sm:px-10 py-3
                    font-medium rounded-xl
                    hover:bg-black
                    w-full sm:w-auto
                  "
                >
                  ADD TO CART
                </button>

                {/* Icons */}
                <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer text-xl" />
                <FaExchangeAlt className="text-gray-500 cursor-pointer text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EyeView;
