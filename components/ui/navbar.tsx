import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
 
        <div className="bg-white ">
          <nav className="bg-white shadow p-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="images/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
                <div className="hidden md:flex space-x-4">
                  <a href="/" className="text-zinc-800 hover:text-orange-500">Home</a>
                  <a href="/courses" className="text-zinc-800 hover:text-orange-500">Courses</a>
                  <a href="#" className="text-zinc-800 hover:text-orange-500">About Us</a>
                  <a href="#" className="text-zinc-800 hover:text-orange-500">Contact Us</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/signup" className="text-zinc-800 hover:text-orange-500 hidden md:inline-block">Sign up</a>
                <a href="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg hidden md:inline-block">Login</a>
                <button onClick={toggleMenu} className="md:hidden flex items-center text-zinc-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
            {isOpen && (
              <>
                <a href="#" className="block text-zinc-800 hover:text-orange-500 py-2">Home</a>
                <a href="#" className="block text-zinc-800 hover:text-orange-500 py-2">Courses</a>
                <a href="#" className="block text-zinc-800 hover:text-orange-500 py-2">About Us</a>
                <a href="#" className="block text-zinc-800 hover:text-orange-500 py-2">Contact Us</a>
                <a href="#" className="block bg-orange-500 text-white px-4 py-2 rounded-lg mt-2">Sign Up</a>
                <a href="#" className="block text-zinc-800 hover:text-orange-500 mt-2">Login</a>
              </>
            )}
          </nav>
        </div>
     
  );
}
