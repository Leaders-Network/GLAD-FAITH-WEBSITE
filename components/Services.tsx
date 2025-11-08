'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div data-aos="fade-right">
            <p className="text-sm sm:text-base font-semibold text-green-700 uppercase tracking-widest mb-2">
              Our Core Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Delivering Reliable Insurance & IT Consulting <br className="hidden sm:block" />
              for Safer, Smarter Businesses
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
              At <span className="font-semibold text-green-700">GladFaith Consult</span>, 
              we combine Information Technology innovation with deep insurance expertise 
              to protect your business, workforce, and customers.
            </p>
          </div>

          {/* CTA Button */}
          <div data-aos="fade-left">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-700 hover:bg-green-800 text-white text-sm md:text-base font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore All Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* --- Builders’ Liability Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
          {/* Left: Flipping Image */}
          <div data-aos="fade-right" className="relative group w-full h-[400px] rounded-2xl perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-2xl shadow-lg">
              {/* Front Image */}
              <div className="absolute inset-0 backface-hidden">
                <Image
                  src="/images/builders.webp"
                  alt="Builders Liability Front"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Back Image */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <Image
                  src="/images/builders1.jpg"
                  alt="Builders Liability Back"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Builders’ Liability Insurance
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <span className="font-semibold text-green-700">GladFaith Consult</span> provides 
              specialized coverage for builders, contractors, and developers — protecting against 
              liabilities arising from construction-related accidents, injuries, or damages.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With Nigeria’s rapid urban expansion, incidents like building collapse and unsafe 
              worksites are on the rise. Under Section 64 of the Insurance Act 2003, builders must 
              carry this policy to protect workers, the public, and nearby properties.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-1">
              <li>Property developers & construction firms</li>
              <li>Engineers, architects, and site managers</li>
              <li>Projects above two floors</li>
              <li>Small, medium & large-scale contractors</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="my-20 border-t border-gray-200 dark:border-gray-800"></div>

        {/* --- Occupiers’ Liability Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Occupiers’ Liability Insurance
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <span className="font-semibold text-green-700">Occupiers’ Liability Insurance</span> 
              protects landlords, tenants, and business owners from losses if accidents occur on their premises.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              From schools and supermarkets to hotels, every occupier must ensure the safety 
              of everyone who enters. This insurance covers compensation and legal expenses 
              for injuries or damages caused by unsafe conditions.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-1">
              <li>Landlords and estate managers</li>
              <li>Schools, hotels, and office complexes</li>
              <li>Property owners & business operators</li>
              <li>Facility managers and maintenance teams</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Flipping Image */}
          <div
            data-aos="fade-left"
            className="relative group w-full h-[400px] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2 perspective"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-2xl">
              {/* Front Image */}
              <div className="absolute inset-0 backface-hidden">
                <Image
                  src="/images/occupiers.jpg"
                  alt="Occupiers Liability Front"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Back Image */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <Image
                  src="/images/occupiers1.jpg"
                  alt="Occupiers Liability Back"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
