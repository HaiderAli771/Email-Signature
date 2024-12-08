"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold text-blue-600">Signature</div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-2xl text-blue-600" /> : <FaBars className="text-2xl text-blue-600" />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-800 hover:text-blue-600 transition">Features</Link>
          <Link href="#templates" className="text-gray-800 hover:text-blue-600 transition">Templates</Link>
          <Link href="#testimonials" className="text-gray-800 hover:text-blue-600 transition">Testimonials</Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-100 py-4">
          <Link href="#features" className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white transition">Features</Link>
          <Link href="#templates" className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white transition">Templates</Link>
          <Link href="#testimonials" className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white transition">Testimonials</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
