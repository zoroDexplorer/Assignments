import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">MyMovieApp</a>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/movies" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Movies</a>
              <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
            </nav>
            <div className="md:hidden">
              <button
                type="button"
                className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className based on menu state */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/movies" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Movies</a>
          <a href="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
