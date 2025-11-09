'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const operators = [
  {
    title: 'Microinsurance Companies',
    description:
      'Provide affordable, accessible insurance solutions tailored for low-income individuals, artisans, and small businesses.',
  },
  {
    title: 'Insurance Brokers',
    description:
      'Serve as trusted intermediaries between clients and insurers, helping clients secure the best protection and value.',
  },
  {
    title: 'Insurance Web Aggregators',
    description:
      'Offer digital platforms for comparing, selecting, and purchasing insurance plans from multiple providers with ease.',
  },
  {
    title: 'Reinsurance Companies',
    description:
      'Support other insurers by sharing risk exposure, ensuring financial stability and sustainability within the industry.',
  },
  {
    title: 'Loss Adjusters',
    description:
      'Provide professional claim assessment and advisory services to guarantee fair and transparent claim settlements.',
  },
];

const InsuranceOperators = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* --- Header --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Key Insurance Operators
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed">
          The National Insurance Commission (NAICOM) regulates and oversees each sector of Nigeria’s insurance industry.  
          These operators play a pivotal role in safeguarding individuals, organizations, and national economic resilience.
        </p>

        {/* --- Scrollable Carousel --- */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {operators.map((op, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="min-w-[90%] sm:min-w-[45%] lg:min-w-[30%] bg-white border border-gray-100 shadow-md rounded-2xl p-8 flex flex-col justify-between snap-center hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">{op.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{op.description}</p>
              </div>

              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-block bg-green-700 text-white px-6 py-2.5 rounded-md font-medium hover:bg-green-800 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceOperators;
