import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#f4f7f4] py-20">
      <h1 className="text-center mb-5 font-bold text-[2rem]">Contact Us  </h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* --- Map --- */}
        <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[600px]">
          <iframe
            src="https://www.google.com/maps?q=Abuja,+Nigeria&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>

        {/* --- Contact Form --- */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-between h-full min-h-[600px]">
          <div>
            <h2 className="text-2xl font-bold text-green-900">
              Get in Touch with GladFaith
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Every great connection begins with a simple conversation. Reach
              out today and let’s discuss how GladFaith can help protect your
              assets and grow your confidence in insurance.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition">
                General Inquiry
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition">
                Policy Support
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition">
                Partnership
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <form className="mt-8 space-y-5 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
              <select className="w-full p-3 rounded-lg border border-gray-300 text-gray-500 focus:ring-2 focus:ring-green-600 outline-none">
                <option>Select Service Type</option>
                <option>Insurance Consultation</option>
                <option>Claims Assistance</option>
                <option>Business Coverage</option>
                <option>Personal Protection</option>
              </select>
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-all w-full sm:w-auto"
            >
              <span>Send a Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.5 4.5L21 11m0 0l-6.5 6.5M21 11H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
