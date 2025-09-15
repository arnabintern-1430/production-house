// src/components/ui/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-400 rounded-full animate-spin"></div>

      {/* Company Name */}
      <h1 className="mt-6 text-2xl font-bold text-blue-600 tracking-wide animate-bounce">
        MS Entertainment
      </h1>

      {/* Loading Text */}
      <p className="mt-2 text-sm text-gray-300 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
