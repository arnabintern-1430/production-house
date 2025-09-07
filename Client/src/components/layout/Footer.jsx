import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Inovix Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;