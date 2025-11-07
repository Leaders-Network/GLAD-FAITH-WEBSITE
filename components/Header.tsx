'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MapPin, ChevronDown } from 'lucide-react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [shrinkNav, setShrinkNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Scroll behaviour: hide top bar + shrink nav on scroll down
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When mobile menu opens: lock body scroll + focus first link
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // focus first link after menu opens
      setTimeout(() => firstMobileLinkRef.current?.focus(), 120);
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Escape to close menus and dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setDropdownOpen(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close mobile menu if user resizes to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(prev => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        navBg
          ? 'bg-white/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-gray-100 py-2 hidden md:block transition-all duration-300 ${
          hideTopBar ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-green-600 mr-1" aria-hidden />
              Lagos, Nigeria
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+2348123456789" className="flex items-center hover:text-green-600 focus:outline-none focus:underline">
              <FaPhone className="text-green-600 mr-1" aria-hidden /> +2348123456789
            </a>
            <a href="https://wa.me/2347012345678" className="flex items-center hover:text-green-600 focus:outline-none focus:underline">
              <FaWhatsapp className="text-green-600 mr-1" aria-hidden /> +2347012345678
            </a>
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
        {/* Logo (use an <img> if you have one) */}
        <Link href="/" className={`font-extrabold text-green-700 transition-all duration-300 ${shrinkNav ? 'text-xl' : 'text-2xl'}`}>
          GLAD-FAITH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 relative text-gray-700">
          <Link href="/" className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 px-2 py-1 rounded">
            Home
          </Link>

          {/* About */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              onKeyDown={(e) => { if (e.key === 'Enter') toggleDropdown('about'); }}
              aria-expanded={dropdownOpen === 'about'}
              aria-haspopup="menu"
              className="flex items-center hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 px-2 py-1 rounded"
            >
              About Us
              <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen === 'about' && (
              <div role="menu" className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 py-2">
                <Link href="/aboutus" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700" role="menuitem">Our Story</Link>
                <Link href="/team" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700" role="menuitem">Our Team</Link>
                <Link href="/mission" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700" role="menuitem">Mission & Vision</Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('services')}
              aria-expanded={dropdownOpen === 'services'}
              aria-haspopup="menu"
              className="flex items-center hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 px-2 py-1 rounded"
            >
              Services
              <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${dropdownOpen === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen === 'services' && (
              <div role="menu" className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-56 py-2">
                <Link href="/insurance-plans" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700" role="menuitem">Insurance Plans</Link>
                <Link href="/claims-assistance" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700" role="menuitem">Claims Assistance</Link>
                <Link href="/consulting" className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700" role="menuitem">Consulting</Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 px-2 py-1 rounded">Blog</Link>
          <Link href="/career" className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 px-2 py-1 rounded">Career</Link>
          <Link href="/contact" className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 px-2 py-1 rounded">Contact</Link>

          {/* CTA (desktop only) */}
          <Link href="/get-quote" className="ml-4 inline-block rounded-full bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 rounded p-1"
        >
          {isMenuOpen ? <CgClose size={28} /> : <CgMenuLeft size={28} />}
        </button>
      </nav>

      {/* Overlay when mobile menu is open */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[1001] ${isMenuOpen ? 'opacity-60 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={closeMenu}
        aria-hidden
      />

      {/* Mobile Side Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-green-900 text-white z-[1002] transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-500 ease-in-out`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col space-y-6 mt-20 px-6 text-lg">
          <Link href="/" ref={firstMobileLinkRef as any} onClick={closeMenu} className="hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white px-1 py-1 rounded">
            Home
          </Link>

          {/* Mobile About */}
          <div>
            <button
              onClick={() => toggleDropdown('about')}
              aria-expanded={dropdownOpen === 'about'}
              className="flex items-center justify-between w-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white px-1 py-1 rounded"
            >
              <span>About Us</span>
              <ChevronDown size={18} className={`${dropdownOpen === 'about' ? 'rotate-180' : ''} transition-transform duration-300`} />
            </button>
            {dropdownOpen === 'about' && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                <Link href="/aboutus" onClick={closeMenu} className="block hover:text-gray-200">Our Story</Link>
                <Link href="/team" onClick={closeMenu} className="block hover:text-gray-200">Our Team</Link>
                <Link href="/mission" onClick={closeMenu} className="block hover:text-gray-200">Mission & Vision</Link>
              </div>
            )}
          </div>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => toggleDropdown('services')}
              aria-expanded={dropdownOpen === 'services'}
              className="flex items-center justify-between w-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white px-1 py-1 rounded"
            >
              <span>Services</span>
              <ChevronDown size={18} className={`${dropdownOpen === 'services' ? 'rotate-180' : ''} transition-transform duration-300`} />
            </button>
            {dropdownOpen === 'services' && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                <Link href="/insurance-plans" onClick={closeMenu} className="block hover:text-gray-200">Insurance Plans</Link>
                <Link href="/claims-assistance" onClick={closeMenu} className="block hover:text-gray-200">Claims Assistance</Link>
                <Link href="/consulting" onClick={closeMenu} className="block hover:text-gray-200">Consulting</Link>
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeMenu} className="hover:text-gray-200">Blog</Link>
          <Link href="/career" onClick={closeMenu} className="hover:text-gray-200">Career</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-gray-200">Contact</Link>

          {/* Optional Mobile CTA */}
          <Link href="/get-quote" onClick={closeMenu} className="mt-4 inline-block rounded-full bg-white text-green-800 px-4 py-2 text-sm font-medium hover:opacity-95 text-center">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
