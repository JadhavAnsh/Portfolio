import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50">
      <div className="bg-white backdrop-blur-md rounded-full px-3 py-2 inline-flex items-center justify-center shadow-md">
        {/* Content: Logo + Links + Button */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-black font-extrabold text-xl tracking-wide" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Ansh Jadhav
          </div>

          {/* Nav Links */}
          <nav className="flex items-center space-x-6 text-black font-medium text-sm">
            <a href="#services" className="hover:text-gray-700 no-underline">About</a>
            <a href="#work" className="hover:text-gray-700 no-underline">Projects</a>
            <a href="#about" className="hover:text-gray-700 no-underline">Experince</a>
          </nav>

          {/* Button */}
          <a
            href="#start"
            className="bg-black text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition no-underline"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
