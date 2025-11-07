'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { image: '/images/s1.png', title: 'Custom Software Development' },
    { image: '/images/s2.png', title: 'Website Design & Development' },
    { image: '/images/s3.png', title: 'Cloud Computing & Hosting Services' },
    { image: '/images/s4.png', title: 'AI & Machine Learning Integration' },
    { image: '/images/s5.png', title: 'Android & iOS App Development' },
    { image: '/images/s6.png', title: '3D Graphics & Vector Design' },
  ];

  return (
    <section className="relative bg-gray-50 dark:bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div data-aos="fade-right">
            <p className="text-sm sm:text-base font-semibold text-green-700 uppercase tracking-widest mb-2">
              What We Provide
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Delivering High-Quality Software Solutions <br className="hidden sm:block" />
              Across All Industries
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
              From enterprise-grade systems to creative digital experiences, we empower
              organizations to innovate, scale, and thrive in the digital era.
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

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
              className="hover:-translate-y-2 transition-transform duration-300"
            >
              <ServiceCard image={service.image} title={service.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
