import React, { useState, useEffect } from "react";
import { Menu, X, Clapperboard } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

// Navigation links (array for easy management)
const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useAppContext();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with brand name */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-0 cursor-pointer"
        >
          {/* <Clapperboard className="text-blue-500" size={32} /> */}
          <img src="/photos/ms_logo.png" className="w-12" alt="MS Entatiment" />
          <span className="text-white text-2xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-blue-500">MS</span> Entertainment
          </span>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="text-gray-200 hover:text-white transition cursor-pointer"
            >
              {link.title}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/booknow")}
            className="cursor-pointer px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white z-[100]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 z-[99] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => {
              navigate(link.path);
              toggleMenu();
            }}
            className="text-white text-3xl font-semibold hover:text-blue-400 transition"
          >
            {link.title}
          </button>
        ))}

        {/* Mobile CTA Button */}
        <button
          onClick={() => navigate("/booknow")}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
