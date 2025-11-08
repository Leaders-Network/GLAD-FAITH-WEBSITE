'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BoardMember {
  name: string;
  title: string;
  image: string;
}

const boardMembers: BoardMember[] = [
  {
    name: 'Dr. Dr. Sammy Olaniyi',
    title: 'Chairman, Governing Board',
    image: '/images/sammy.jpg',
  },
  {
    name: 'Dotun Sasore',
    title: 'Managing Director',
    image: '/images/ola.jpg',
  },
  // You can add more board members here
];

const GoverningBoard = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.05),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white relative inline-block">
            Governing Board
            <span className="absolute left-1/2 -bottom-2 w-20 h-[3px] bg-green-700 transform -translate-x-1/2 rounded-full" />
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the visionary leaders steering <span className="text-green-700 font-medium">GladFaith Consult</span> towards innovation, integrity, and excellence.
          </p>
          <button className="mt-8 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            View All Members
          </button>
        </motion.div>

        {/* --- Board Members --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* --- Image --- */}
              <div className="relative w-full h-[420px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* --- Info --- */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm rounded-t-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-green-700 text-sm mt-1 font-medium">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningBoard;
