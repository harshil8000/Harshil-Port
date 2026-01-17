// @flow strict
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#education', label: 'Education' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass backdrop-blur-xl border-b border-gray-700/50 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center space-x-2 text-2xl lg:text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Harshil
              </span>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                Barad
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradient on Scroll */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      )}
    </nav>
  );
}

export default Navbar;
