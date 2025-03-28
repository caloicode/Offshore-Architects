import { useState, useEffect, useRef } from "react";
import LightDarkToggle from "./LightDarkToggle";
import servicesData from "../data/services.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  const [mobileMenuState, setMobileMenuState] = useState({
    isServicesOpen: false,
    openCategory: null,
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsAnimating(true);
      setIsServicesOpen(mobileMenuState.isServicesOpen);
      setOpenCategory(mobileMenuState.openCategory);
      setTimeout(() => setIsAnimating(false), 300);
    } else {
      setMobileMenuState({
        isServicesOpen,
        openCategory,
      });
      setIsAnimating(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        setIsAnimating(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    if (openCategory !== category && isMenuOpen) {
      setTimeout(() => {
        const element = document.getElementById(`category-${category}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100);
    }
  };

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsServicesOpen(false);
        setOpenCategory(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-primary shadow-md fixed w-full z-50 transition-colors duration-500">
      <div className="px-4 py-3 flex justify-between items-center mx-auto md:mx-0 w-full">
        {/* Logo and Title */}
        <a href="/" className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="h-10 w-10 rounded-full mr-2"
          />
          <span className="text-primary text-xl font-bold">
            Offshore Architects
          </span>
        </a>

        {/* Menu Icon (for mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
          <a href="/" className="text-primary hover:text-gray-600">
            Home
          </a>
          <div className="relative">
            <button
              ref={servicesButtonRef}
              onClick={toggleServices}
              className={`text-primary hover:text-gray-600 focus:outline-none px-3 py-1 rounded ${
                isServicesOpen ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
              aria-expanded={isServicesOpen}
            >
              Services
            </button>
            {isServicesOpen && (
              <div
                ref={servicesDropdownRef}
                className="absolute top-full left-0 mt-2 w-64 bg-primary shadow-lg rounded-lg p-4 z-50"
              >
                {servicesData.map((service, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleCategory(service.category)}
                      className={`w-full text-left text-primary hover:text-gray-600 focus:outline-none px-3 py-2 rounded ${
                        openCategory === service.category
                          ? "bg-gray-100 dark:bg-gray-800"
                          : ""
                      }`}
                      aria-expanded={openCategory === service.category}
                    >
                      {service.category}
                    </button>
                    {openCategory === service.category && (
                      <div className="pl-4 mt-2">
                        {service.services.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            className="block text-gray-600 dark:text-gray-300 hover:text-primary mt-1 px-3 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
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
          <a href="#footer" className="text-primary hover:text-gray-600">
            Contact
          </a>

          <LightDarkToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        ref={overlayRef}
      >
        <div
          className={`fixed inset-0 bg-black/50 dark:bg-black/70 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />
        <div
          ref={mobileMenuRef}
          className={`fixed right-0 top-0 h-full w-64 bg-primary shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <span className="text-primary text-xl font-bold">Menu</span>
              <button
                onClick={toggleMenu}
                className="text-primary focus:outline-none"
                aria-label="Close menu"
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
            </div>

            <div className="flex-grow overflow-y-auto">
              <a
                href="/"
                className="block py-3 text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded px-3"
                onClick={toggleMenu}
              >
                Home
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />

              <div>
                <button
                  onClick={toggleServices}
                  className={`w-full text-left py-3 text-primary rounded px-3 ${
                    isServicesOpen
                      ? "bg-gray-100/50 dark:bg-gray-800/50"
                      : "hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
                  }`}
                  aria-expanded={isServicesOpen}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="pl-2">
                    {servicesData.map((service, index) => (
                      <div key={index} id={`category-${service.category}`}>
                        <button
                          onClick={() => toggleCategory(service.category)}
                          className={`w-full text-left py-3 text-primary rounded px-4 ${
                            openCategory === service.category
                              ? "bg-gray-100/50 dark:bg-gray-800/50"
                              : "hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
                          }`}
                          aria-expanded={openCategory === service.category}
                        >
                          {service.category}
                        </button>
                        {openCategory === service.category && (
                          <div className="pl-4">
                            {service.services.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.link}
                                className="block py-2 text-gray-600 dark:text-gray-300 rounded px-4 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
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
              </div>

              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <a
                href="#portfolio"
                className="block py-3 text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded px-3"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <a
                href="#about"
                className="block py-3 text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded px-3"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <a
                href="#footer"
                className="block py-3 text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded px-3"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <LightDarkToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
