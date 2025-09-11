import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center text-center text-sm text-gray-500">
        <span>
          &copy; {new Date().getFullYear()} MS Entertainment Production House Private Limited. All Rights Reserved.
        </span>
        <span className="hidden sm:inline mx-2">|</span>
        <span>
          Designed & Developed by{" "}
          <a
            href="https://www.inovixtechconsultancy.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            Inovix Tech Consultancy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;