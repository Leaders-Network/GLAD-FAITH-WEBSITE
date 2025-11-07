'use client';
import Image from 'next/image';
import React from 'react';
import { PlayCircle } from 'lucide-react';

const CEOInsight = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left: Image with play icon */}
        <div className="relative group rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/ceo.jpg" // 🟢 Replace with your image path in public/images
            alt="GladFaith CEO speaking"
            width={700}
            height={450}
            className="rounded-lg object-cover"
          />
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
            <PlayCircle size={80} className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Right: Text content */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4 leading-snug">
            GladFaith CEO shares insights on Technology impact on Nigeria’s insurance sector.
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Empowering African businesses through innovative tech consulting, driving growth, innovation, and competitiveness in the digital age across diverse industries. with a focus on delivering tailored solutions that meet the unique needs of each client. Our team of experts leverages cutting-edge technologies and industry best practices to help businesses navigate the complexities of the digital landscape.
          </p>
          <button className="border border-green-700 text-green-700 px-6 py-2 rounded-md hover:bg-green-700 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CEOInsight;
