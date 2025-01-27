import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Brand_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white font-[Inter]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">
              <img src={logo} alt="Brand_logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:bg-white hover:text-black px-3 py-2 rounded-sm text-sm font-medium">Demos</a>
                <a href="#" className="hover:bg-white hover:text-black px-3 py-2 rounded-sm text-sm font-medium">About</a>
                <a href="#" className="hover:bg-white hover:text-black px-3 py-2 rounded-sm text-sm font-medium">Blog</a>
                <a href="#" className="hover:bg-white hover:text-black px-3 py-2 rounded-sm text-sm font-medium">Pages</a>
                <a href="#" className="hover:bg-white hover:text-black px-3 py-2 rounded-sm text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className='space-x-4 hidden md:block'>
            <button type="button" className="outline-custom hover:bg-white hover:text-black px-3 py-2 rounded-sm text-sm font-medium">Sign In</button>
            <button type="button" className="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] px-3 py-2 rounded-sm text-sm font-medium">Get Started Free</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-15 z-50 left-0 bg-[rgba(151,129,129,0.15)] backdrop-blur-sm w-full  ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Demos</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Blog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Pages</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
