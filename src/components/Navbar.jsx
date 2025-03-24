import { useState } from "react";
import LightDarkToggle from "./LightDarkToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Title */}

        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="h-10 w-10 rounded-full mr-2"
          />
          <span className="text-xl font-bold text-primary">
            Offshore Architects
          </span>
        </div>

        {/* <div className="flex items-center">
          <img src="/logo-placeholder.png" alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Offshore Architects
          </span>
        </div> */}

        {/* Menu Icon (for mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 dark:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:text-gray-600"
          >
            Contact
          </a>
          <LightDarkToggle />
        </div>
      </div>

      {/* Mobile Menu (Canvas) */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        >
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg">
            <div className="p-4">
              <a href="#" className="block py-2 text-gray-800 dark:text-white">
                Home
              </a>
              <a href="#" className="block py-2 text-gray-800 dark:text-white">
                Services
              </a>
              <a href="#" className="block py-2 text-gray-800 dark:text-white">
                Portfolio
              </a>
              <a href="#" className="block py-2 text-gray-800 dark:text-white">
                About Us
              </a>
              <a href="#" className="block py-2 text-gray-800 dark:text-white">
                Contact
              </a>
              <LightDarkToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
