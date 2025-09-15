import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Auto play audio when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay restrictions (browser blocks without user interaction)
        console.log("Autoplay blocked until user interacts.");
      });
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-screen z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-0 cursor-pointer"
        >
          <img src="/photos/ms_logo.png" className="w-15" alt="MS Entertainment" />
          <span className="text-white text-2xl md:text-3xl font-logo font-extrabold tracking-wide">
            <span className="text-blue-500">MS</span> Entertainment
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition cursor-pointer ${
                  isActive
                    ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                    : "text-gray-200 hover:text-white"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Music Toggle Button */}
        <button
          onClick={toggleMute}
          className="ml-4 text-white hover:text-blue-400 transition"
          aria-label="Toggle Background Music"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="cursor-pointer px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-[100]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 z-[99] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-3xl font-semibold transition ${
                isActive ? "text-blue-400" : "text-white hover:text-blue-400"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}

        {/* Mobile CTA */}
        <button
          onClick={() => {
            navigate("/contact");
            toggleMenu();
          }}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition cursor-pointer"
        >
          Book Now
        </button>
      </div>

      {/* Hidden Audio Player */}
      <audio ref={audioRef} src="/Audio/audo_production.mp3" loop autoPlay hidden />
    </header>
  );
};

export default Header;
