"use client"
import React from "react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { GrTechnology } from "react-icons/gr"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-green-950 text-gray-300 pt-16 pb-10">
      {/* --- Top CTA Section --- */}
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug">
          Turn Insurance Questions <br className="hidden sm:block" /> Into Smart Decisions.
        </h2>

        <form className="w-full sm:w-auto flex justify-center lg:justify-end">
          <div className="bg-white rounded-full flex overflow-hidden w-full max-w-md shadow-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 text-gray-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium text-sm sm:text-base transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* --- Main Footer Grid --- */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-green-800 pt-10">
        {/* --- 1. Brand Info --- */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
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

          <div className="mt-6 flex justify-center sm:justify-start items-center space-x-3">
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
        <div className="text-center sm:text-left">
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
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-green-300 cursor-pointer">Insurance Advisory</li>
            <li className="hover:text-green-300 cursor-pointer">Property Coverage</li>
            <li className="hover:text-green-300 cursor-pointer">Risk Management</li>
            <li className="hover:text-green-300 cursor-pointer">Claims Support</li>
            <li className="hover:text-green-300 cursor-pointer">Corporate Plans</li>
          </ul>
        </div>

        {/* --- 4. Contacts --- */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contacts</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FiPhone className="text-green-400" /> 08038151415
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FiPhone className="text-green-400" /> 08033000908
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FiPhone className="text-green-400" /> 07065078128
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FiMail className="text-green-400" /> hello@gladfaith.com
            </li>
            <li className="flex items-start justify-center sm:justify-start gap-2 text-sm">
              <FiMapPin className="text-green-400 mt-1" />
              <span>Gladfaith Consult, 19 Emmanuel Street, Ogudu, Ojota, Lagos</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="w-[90%] mx-auto mt-12 pt-6 border-t border-green-800 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 text-center md:text-left">
        <p>© 2025 GladFaith. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-green-300 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-300 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
