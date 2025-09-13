import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-gray-950 flex justify-center items-center text-white py-8">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Connect with us</h2>
        <div className="flex justify-center items-center space-x-6 md:space-x-8">
          {/* Instagram */}
          <a
            href="http://instagram.com/msentertainmentbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform transform hover:scale-110"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-pink-600 transition-all duration-300 group-hover:bg-pink-700 shadow-lg">
              <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-200">
              Instagram
            </span>
          </a>

          {/* Facebook */}
          <a
            href="http://facebook.com/msentertainmentbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform transform hover:scale-110"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-blue-600 transition-all duration-300 group-hover:bg-blue-700 shadow-lg">
              <Facebook className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-200">
              Facebook
            </span>
          </a>

          {/* YouTube */}
          <a
            href="http://youtube.com/@MSEntertainmentBharat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform transform hover:scale-110"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-full bg-red-600 transition-all duration-300 group-hover:bg-red-700 shadow-lg">
              <Youtube className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-200">
              YouTube
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
