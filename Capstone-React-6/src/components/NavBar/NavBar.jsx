import React from 'react';

export default function NavBar() {
  return (
    <div>
      <nav className="bg-[#F1F3F6] border-gray-200">
        <div className="w-11/12 flex items-center justify-between mx-auto p-4">
          {/* Logo Mindease */}
          <div className="flex items-center justify-end">
            <a href="#" className="flex items-center space-x-3 ">
              <img src="logo/mindease-logo.svg" className="h-8" alt="Mindease Logo" />
            </a>
          </div>

          {/* Daftar Menu dan Tombol Menu Responsive */}
          <div className="flex items-center space-x-3 md:justify-start w-full md:w-auto">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-3 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>

            {/* Daftar Menu */}
            <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
              <ul className="text-body1 font-regular flex flex-col md:flex-row mt-4 md:mt-0">
                <li>
                  <a href="#" className="block py-2 px-3 text-dark-3 border-b-2 border-transparent hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-dark-3 border-b-2 border-transparent hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary">Our Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-dark-3 border-b-2 border-transparent hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary">About Us</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-dark-3 border-b-2 border-transparent hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary">Community</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-dark-3 border-b-2 border-transparent hover:bg-transparent hover:text-primary hover:border-b-2 hover:border-primary">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
