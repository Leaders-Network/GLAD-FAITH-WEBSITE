'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CEOInsight = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-stretch gap-12">
        
        {/* --- Left: Video --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg h-full flex"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden group">
            {/* Dark Overlay for Professional Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
            <video
              src="/videos/hero-bg.mp4"
              poster="/images/ceo.jpg"
              controls
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* --- Right: Text --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center h-full space-y-6"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-green-600">
            CEO’s Perspective
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            “Technology is redefining the future of Nigeria’s insurance landscape.”
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold text-green-700">GladFaith Consult</span>, 
            we are at the forefront of merging technology and insurance expertise — 
            ensuring that individuals, businesses, and institutions not only stay protected 
            but also thrive in an increasingly digital economy. 
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our commitment is to simplify insurance through innovation, making it accessible, 
            transparent, and efficient for every stakeholder across Nigeria’s financial ecosystem.
          </p>

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-green-700 text-green-700 font-medium rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOInsight;
