import AppColors from "../../utils/const/AppColors.jsx";

function AnimatedBtn({
  children,
  onClick,
  className = "",
  type = "button",
}) {

    // console.log("sddsfdf",AppColors.purple)

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden
        border border-gray-600
        font-medium
        px-6 md:px-10 py-2 md:py-4
        text-xs md:text-sm tracking-widest
        text-black

        transition-colors duration-500

        before:absolute before:inset-0
        before:bg-[${AppColors.purple}]
        before:scale-x-0
        before:origin-right
        before:transition-transform before:duration-650

        hover:before:scale-x-100
        hover:before:origin-left
        hover:text-white

        ${className}
      `}
    >
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}

export default AnimatedBtn;
