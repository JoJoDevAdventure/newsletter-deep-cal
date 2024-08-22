import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollByAmount = (amount) => {
    window.scrollTo({
      top: window.scrollY + amount,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white pt-5 flex justify-between items-center relative">
      <div className="flex flex-row space-x-2 justify-between align-left text-left origin-left align-middle items-center">
        <div className="md:hidden mt-0 flex flex-col items-start justify-start text-left">
          <button onClick={toggleMenu} className="text-white ml-4 flex flex-col items-start justify-start text-left">
            {isMenuOpen ? "" : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>
        <div className="flex items-center">
          <img className="w-24" src="./Logo-W.png" alt="Logo" />
        </div>
      </div>

      <ul className={`hidden md:flex mt-4 md:mt-0 md:flex-grow md:justify-center md:text-l md:font-regular`}>
        <li className="mr-4 lg:mr-8 hover:text-gray-400">
          <a href="https://deepcal.xyz">Home</a>
        </li>
        <li className="mr-4 lg:mr-8 hover:text-gray-400" onClick={() => scrollByAmount(500)}>
          <a href="https://deepcal.xyz">Company</a>
        </li>
        <li className="mr-4 lg:mr-8 hover:text-gray-400" onClick={() => scrollByAmount(1000)}>
          <a href="https://deepcal.xyz">Solutions</a>
        </li>
        <li className="mr-4 lg:mr-8 hover:text-gray-400">
          <a href="https://blog.deepcal.xyz">Blog</a>
        </li>
        <li className="mr-4 lg:mr-8 hover:text-gray-400">
          <a href="https://deepcal.xyz/#/industry-news">Industry News</a>
        </li>
      </ul>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black/70" onClick={toggleMenu}>
          <div className="absolute top-0 left-0 h-[130vh] w-60 bg-gray-900 p-8 z-50">
            <ul className="text-white">
              <li>
                <button onClick={toggleMenu} className="text-white mb-4">
                  <span className="text-3xl">&#10005;</span>
                </button>
              </li>
              <li className="mb-4">
                <a href="https://deepcal.xyz" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li className="mb-4" onClick={() => scrollByAmount(500)}>
                <a href="https://deepcal.xyz/#/company" onClick={toggleMenu}>
                  Company
                </a>
              </li>
              <li className="mb-4" onClick={() => scrollByAmount(1400)}>
                <a href="https://deepcal.xyz/#/solutions" onClick={toggleMenu}>
                  Solutions
                </a>
              </li>
              <li className="mr-4 lg:mr-8 hover:text-gray-400 mb-4">
                <a href="https://blog.deepcal.xyz">Blog</a>
              </li>
              <li className="mr-4 lg:mr-8 hover:text-gray-400">
                <a href="https://deepcal.xyz/#/industry-news">Industry News</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="block">
        <a
          href="https://deepcal.xyz/#/demo"
          className="bg-transparent hover:text-gray-300 text-white font-semibold py-2 px-3 md:px-4 rounded-full"
        >
          Demo
        </a>
        <a
          href="https://deepcal.xyz/#/contact"
          className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 px-3 md:px-4 rounded-full border-white border-2"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;