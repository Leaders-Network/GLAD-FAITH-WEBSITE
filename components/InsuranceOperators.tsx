'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* --- Header --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Key Insurance Operators
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          The National Insurance Commission (NAICOM) regulates and oversees each sector of Nigeria’s insurance industry.  
          These operators play a pivotal role in safeguarding individuals, organizations, and national economic resilience.
        </p>

        {/* --- Swiper Carousel --- */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {operators.map((op, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3">
                    {op.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {op.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-block bg-green-700 text-white px-6 py-2.5 rounded-md font-medium hover:bg-green-800 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InsuranceOperators;
