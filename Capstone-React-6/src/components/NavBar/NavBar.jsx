import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sections = [
    { name: 'Home', link: 'home' },
    { name: 'Services', link: 'services' },
    { name: 'About', link: 'about' },
    { name: 'Community', link: 'community' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <div>
      <nav className="bg-[#F1F3F6] border-gray-200 fixed top-0 w-full z-10">
        <div className="w-11/12 flex items-center justify-between mx-auto p-4">
          {/* Logo Mindease */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img src="logo/mindease-logo.svg" className="h-8" alt="Mindease Logo" />
            </a>
          </div>

          {/* Tombol Menu Responsive */}
          <div className="flex items-center md:hidden relative">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={toggleMenu} // Toggle menu
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>

            {/* Menu Dropdown */}
            {menuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
                <ul className="text-body1 font-regular flex flex-col mt-4 space-y-1">
                  {sections.map(section => (
                    <li key={section.link}>
                      <ScrollLink
                        to={section.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => handleSetActive(section.link)}
                        className={`block py-2 px-3 cursor-pointer 
                        ${activeSection === section.link ? 'text-primary border-primary border-b-2' : 'text-dark-3 hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary'}`}
                      >
                        {section.name}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Daftar Menu untuk layar besar */}
          <div className="hidden md:flex md:w-auto">
            <ul className="text-body1 font-regular flex flex-row mt-4 md:mt-0 space-x-2">
              {sections.map(section => (
                <li key={section.link}>
                  <ScrollLink
                    to={section.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => handleSetActive(section.link)}
                    className={`block py-2 px-3 cursor-pointer 
                    ${activeSection === section.link ? 'text-primary border-primary border-b-2' : 'text-dark-3 hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary'}`}
                  >
                    {section.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
