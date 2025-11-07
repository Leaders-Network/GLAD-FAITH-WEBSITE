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
    name: 'Dr. Sammuel Oluyemi Adejare',
    title: 'Chairman, Governing Board',
    image: '/images/sammy.jpg',
  },
  {
    name: 'Dr. Olusegun Ayo Omosehin',
    title: 'Commissioner / CEO',
    image: '/images/ola.jpg',
  },
  // {
  //   name: 'Dr. Usman Jankara Jimada',
  //   title: 'Deputy Commissioner Technical',
  //   image: '/images/board3.jpg',
  // },
];

const GoverningBoard = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Governing Board
          </h2>
          <p className="mt-2 text-gray-600 max-w-md">
            Meet the visionary leaders driving excellence in Nigeria
          </p>
          <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-md transition">
            View All Members
          </button>
        </motion.div>

        {/* Board Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {member.name}
                </h3>
                <p className="text-green-700 text-sm mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningBoard;
