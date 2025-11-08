'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CEOInsight = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch">
        {/* --- Left: Video --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg flex"
        >
          <video
            src="/videos/hero-bg.mp4"
            poster="/images/ceo.jpg"
            controls
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 rounded-2xl" />
        </motion.div>

        {/* --- Right: Text --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6 bg-white/70 rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-green-600">
            CEO’s Perspective
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            “Technology is redefining the future of Nigeria’s insurance landscape.”
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold text-green-700">GladFaith Consult</span>, 
            we lead in merging technology and insurance expertise to empower individuals 
            and businesses for a secure, digital future.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our goal is to simplify insurance through innovation — making it accessible, 
            transparent, and efficient for every stakeholder.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-700 text-green-700 font-medium rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm w-fit"
          >
            Learn More <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOInsight;
