'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MapPin, ChevronDown } from 'lucide-react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [shrinkNav, setShrinkNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Scroll behaviour
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHideTopBar(true);
        setShrinkNav(true);
      } else if (window.scrollY < lastScrollY && window.scrollY < 80) {
        setHideTopBar(false);
        setShrinkNav(false);
      }
      setNavBg(window.scrollY >= 90);
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(prev => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <>
      {/* HEADER */}
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          navBg ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        {/* Top Bar */}
        <div
          className={`bg-gray-100 py-2 hidden md:block transition-all duration-300 ${
            hideTopBar ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto py-2 px-4 flex justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-green-600 mr-1" aria-hidden />
                Lagos, Nigeria 111211
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+2348123456789" className="flex items-center hover:text-green-600">
                <FiPhone className="text-green-600 mr-1" /> 08038151415
              </a>
               <a href="tel:+2348123456789" className="flex items-center hover:text-green-600">
                <FiPhone className="text-green-600 mr-1" /> 08033000908
              </a>
              {/* <a href="https://wa.me/2347012345678" className="flex items-center hover:text-green-600">
                <FaWhatsapp className="text-green-600 mr-1" /> +2347012345678
              </a> */}
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
            shrinkNav ? 'py-2' : 'py-4'
          }`}
        >
          <Link href="/" className="font-extrabold text-green-700 text-2xl">
            GLAD-FAITH
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center font-semibold space-x-6 transition-colors duration-300 ${
            navBg ? 'text-green-700' : 'text-white'}`}>
            <Link href="/" className="hover:text-green-600">Home</Link>
            <Link href="#about" className="hover:text-green-600">About</Link>
            <Link href="#service" className="hover:text-green-600">Services</Link>
            <Link href="/" className="hover:text-green-600">Blog</Link>
            <Link href="/" className="hover:text-green-600">Career</Link>
            <Link href="#contact" className="hover:text-green-600">Contact</Link>
            <Link href="/" className="ml-4 rounded-full bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-gray-700 bg-green-900 text-white rounded-full p-1 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
          >
            {isMenuOpen ? <CgClose size={28} /> : <CgMenuLeft size={28} />}
          </button>
        </nav>
      </header>

      {/* Overlay (OUTSIDE header) */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[999] ${
          isMenuOpen ? 'opacity-60 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden
      />

      {/* Mobile Side Menu (OUTSIDE header too) */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-green-900 text-white z-[1000] transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col space-y-6 mt-20 px-6 text-lg">
          <Link href="/" onClick={closeMenu} className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/aboutus" onClick={closeMenu} className="hover:text-gray-200">
            About Us
          </Link>
          <Link href="/services" onClick={closeMenu} className="hover:text-gray-200">
            Services
          </Link>
          <Link href="/blog" onClick={closeMenu} className="hover:text-gray-200">
            Blog
          </Link>
          <Link href="/career" onClick={closeMenu} className="hover:text-gray-200">
            Career
          </Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-gray-200">
            Contact
          </Link>
          <Link
            href="/get-quote"
            onClick={closeMenu}
            className="mt-4 inline-block rounded-full bg-white text-green-800 px-4 py-2 text-sm font-medium hover:opacity-95 text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
