'use client';
import React from 'react';

const CEOInsight = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left: Video */}
        <div className="relative group rounded-lg overflow-hidden shadow-md aspect-video md:aspect-[4/3]">
          <video
            src="/videos/hero-bg.mp4"
            poster="/images/ceo.jpg"
            controls
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4 leading-snug">
            GladFaith CEO shares insights on technology’s impact on Nigeria’s insurance sector.
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Empowering African businesses through innovative tech consulting, driving growth, innovation, and competitiveness in the digital age across diverse industries. Our team of experts leverages cutting-edge technologies and industry best practices to help businesses navigate the complexities of the digital landscape.
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
