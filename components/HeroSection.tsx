'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaInstagram, FaX } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Background Video or Image */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Sticky Social Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {[
          { icon: <FaFacebook size={15} />, href: '#' },
          { icon: <FaX size={15} className='text-black' />, href: '#' },
          { icon: <FaInstagram size={15} />, href: '#' },
          { icon: <FaYoutube size={15} />, href: '#' },
          { icon: <FaLinkedinIn size={16} />, href: '#' },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white p-[7px] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Transforming Businesses Through
          <span className="text-green-200"> Innovative </span> Technology <span className="text-green-500">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 text-lg text-gray-200 max-w-xl"
        >
          Transforming Industries with Cutting-Edge IT Solutions. Banking, Insurance, and IT Management Expertise, Delivered with Precision.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-green-600/50 transition"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
