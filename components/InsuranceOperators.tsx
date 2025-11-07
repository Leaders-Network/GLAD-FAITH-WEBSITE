'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const operators = [
  {
    title: 'Microinsurance Companies',
    description:
      'Specialize in providing affordable insurance products for low-income individuals and small enterprises.',
  },
  {
    title: 'Insurance Brokers',
    description:
      'Act as intermediaries between clients and insurers, ensuring clients receive the best coverage options.',
  },
  {
    title: 'Insurance Web Aggregators',
    description:
      'Provide online platforms for comparing and purchasing insurance products from multiple companies.',
  },
  {
    title: 'Reinsurance Companies',
    description:
      'Offer insurance coverage to other insurance companies to help them manage large risks.',
  },
  {
    title: 'Loss Adjusters',
    description:
      'Assist in assessing insurance claims and ensuring fair compensation for policyholders.',
  },
];

const InsuranceOperators = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Insurance Operators</h2>
        <p className="text-gray-700 mb-10">
          NAICOM sets policies and provides regulatory oversight for all key sectors of the Nigerian insurance companies.
          Each segment plays a vital role in protecting lives, assets, and investments while supporting economic stability.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {operators.map((op, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{op.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{op.description}</p>
                <Link
                  href="#"
                  className="inline-block bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
                >
                  Read More
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InsuranceOperators;
