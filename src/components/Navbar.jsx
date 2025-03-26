import { useState, useEffect, useRef } from "react";
import LightDarkToggle from "./LightDarkToggle";
import servicesData from "../data/services.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleCategory = (category) =>
    setOpenCategory(openCategory === category ? null : category);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth >= 1024 &&
        isServicesOpen &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isServicesOpen]);

  return (
    <nav className="bg-primary shadow-md fixed w-full z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="h-10 w-10 rounded-full mr-2"
          />
          <span className="text-primary text-xl font-bold">
            Offshore Architects
          </span>
        </div>

        {/* Menu Icon (for mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-primary focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#home" className="text-primary hover:text-gray-600">
            Home
          </a>
          <div className="relative">
            <button
              ref={servicesButtonRef}
              onClick={toggleServices}
              className="text-primary hover:text-gray-600 focus:outline-none"
            >
              Services
            </button>
            {isServicesOpen && (
              <div
                ref={servicesDropdownRef}
                className="absolute top-full left-0 mt-2 w-64 bg-primary shadow-lg rounded-lg p-4"
              >
                {servicesData.map((service, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleCategory(service.category)}
                      className="w-full text-left text-primary hover:text-gray-600 focus:outline-none"
                    >
                      {service.category}
                    </button>
                    {openCategory === service.category && (
                      <div className="pl-4 mt-2">
                        {service.services.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            className="block text-gray-600 dark:text-gray-300 hover:text-primary mt-1"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                    {index < servicesData.length - 1 && (
                      <hr className="my-2 border-gray-200 dark:border-gray-700" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="#portfolio" className="text-primary hover:text-gray-600">
            Portfolio
          </a>
          <a href="#about" className="text-primary hover:text-gray-600">
            About Us
          </a>
          <a href="#contact" className="text-primary hover:text-gray-600">
            Contact
          </a>

          {/* Add the toggle on desktop */}
          <LightDarkToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-20">
          <div
            className="fixed inset-0 bg-black/50 dark:bg-black/70"
            onClick={toggleMenu}
          />
          <div
            className="fixed right-0 top-0 h-full w-64 bg-primary shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-primary"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <a
                href="#home"
                className="block py-2 text-primary"
                onClick={toggleMenu}
              >
                Home
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <button
                onClick={toggleServices}
                className="w-full text-left py-2 text-primary"
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="pl-4">
                  {servicesData.map((service, index) => (
                    <div key={index}>
                      <button
                        onClick={() => toggleCategory(service.category)}
                        className="w-full text-left py-2 text-primary"
                      >
                        {service.category}
                      </button>
                      {openCategory === service.category && (
                        <div className="pl-4">
                          {service.services.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.link}
                              className="block py-1 text-gray-600 dark:text-gray-300"
                              onClick={toggleMenu}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                      {index < servicesData.length - 1 && (
                        <hr className="my-2 border-gray-200 dark:border-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              )}
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <a
                href="#portfolio"
                className="block py-2 text-primary"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <a
                href="#about"
                className="block py-2 text-primary"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <a
                href="#contact"
                className="block py-2 text-primary"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />

              <div className="mt-4">
                <LightDarkToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
