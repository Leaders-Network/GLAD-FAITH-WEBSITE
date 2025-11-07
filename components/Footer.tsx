"use client"
import React from "react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { GrTechnology } from "react-icons/gr"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-green-950 text-gray-300 pt-20 pb-10">
      {/* --- Top CTA Section --- */}
      <div className="w-[85%] mx-auto flex justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
          Turn Insurance Questions <br /> Into Smart Decisions.
        </h2>

        <form className="mt-8 flex justify-center">
          <div className="bg-white rounded-full flex overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-2 py-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 font-medium transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* --- Main Footer Grid --- */}
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-green-800 pt-10">
        {/* --- 1. Brand Info --- */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <GrTechnology className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">GladFaith</h1>
          </div>

          <p className="text-sm leading-6 text-gray-400">
            GladFaith is committed to delivering reliable insurance solutions
            that empower individuals and businesses with protection and peace of
            mind across Nigeria.
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black hover:bg-gray-900 transition"
            >
              <FaX className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
            >
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

        {/* --- 2. Company --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-green-300 cursor-pointer">Home</li>
            <li className="hover:text-green-300 cursor-pointer">About Us</li>
            <li className="hover:text-green-300 cursor-pointer">Services</li>
            <li className="hover:text-green-300 cursor-pointer">Contact</li>
            <li className="hover:text-green-300 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* --- 3. Services --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-green-300 cursor-pointer">
              Insurance Advisory
            </li>
            <li className="hover:text-green-300 cursor-pointer">
              Property Coverage
            </li>
            <li className="hover:text-green-300 cursor-pointer">
              Risk Management
            </li>
            <li className="hover:text-green-300 cursor-pointer">
              Claims Support
            </li>
            <li className="hover:text-green-300 cursor-pointer">
              Corporate Plans
            </li>
          </ul>
        </div>

        {/* --- 4. Contacts --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contacts</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FiPhone className="text-green-400" /> +234-802-555-7890
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-green-400" /> hello@gladfaith.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-green-400" /> 12 Unity Avenue, Wuse 2,
              Abuja, Nigeria
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="w-[85%] mx-auto mt-10 pt-6 border-t border-green-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 GladFaith. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-green-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
