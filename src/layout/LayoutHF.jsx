import React from 'react'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollTopBtn from "../components/ScrollTopBtn.jsx";

function LayoutHF({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-999">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-10">
        <Footer />
      </footer>

      <ScrollTopBtn />
    </div>
  );
}

export default LayoutHF;
