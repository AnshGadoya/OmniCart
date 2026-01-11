import { useEffect, useState } from "react";

export default function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div
        onClick={scrollToTop}
        className="group fixed bottom-14 right-10 z-50 cursor-pointer rounded-full bg-blue-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-blue-700"
      >
        <div className="relative h-7 w-7 overflow-hidden">
          {/* Default arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-7 w-7 transition-transform duration-300 group-hover:-translate-y-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>

          {/* Hover arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-7 w-7 translate-y-6 transition-transform duration-300 group-hover:translate-y-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    )
  );
}
