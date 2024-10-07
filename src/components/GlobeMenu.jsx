import React, { useState } from 'react';
import { Globe } from 'lucide-react'; // Using Globe icon from Lucide

const GlobeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Globe icon button */}
      <button
        onClick={toggleMenu}
        className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none ml-[1450px] mt-10 ${
          isOpen ? 'animate-spin-slow' : ''
        }`} // Adding spin animation when open
      >
        <Globe className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-10 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="p-2">
          <li className="p-2 hover:bg-gray-200 bg-gray-100 cursor-pointer mb-1">Asia</li>
          <li className="p-2 hover:bg-gray-200 bg-gray-100 cursor-pointer mb-1">Europe</li>
          <li className="p-2 hover:bg-gray-200 bg-gray-100 cursor-pointer mb-1">North America</li>
          <li className="p-2 hover:bg-gray-200 bg-gray-100 cursor-pointer mb-1">South America</li>
          <li className="p-2 hover:bg-gray-200 bg-gray-100 cursor-pointer mb-1">Africa</li>
          <li className="p-2 hover:bg-gray-200 bg-gray-100 cursor-pointer">Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default GlobeMenu;
