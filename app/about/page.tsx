import {ArrowRight} from "lucide-react"
import Image from "next/image"

const page = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 mt-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* --- Left: Image --- */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="relative w-full h-[550px] lg:h-auto flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/images/about.jpg"
                  alt="GladFaith Consulting Office"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
    
            {/* --- Right: Text Content --- */}
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="flex flex-col justify-center h-full"
            >
              <p className="text-lg font-medium text-green-700 uppercase tracking-wide mb-3">
                About GladFaith Consulting
              </p>
    
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight mb-6">
                Bridging Technology and Insurance with Integrity
              </h2>
    
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <span className="font-semibold text-green-700">GladFaith Consult</span> delivers
                cutting-edge <strong>Information Technology</strong> and
                <strong> Insurance consultancy</strong> services designed to transform the way
                insurance businesses operate. We build smart digital solutions tailored
                for both compulsory and general insurance applications.
              </p>
    
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                In today’s world, insurance is more than a policy — it’s a financial
                safety net. As your trusted, independent partner, we simplify complex
                insurance products, bridging the gap between technology, coverage, and
                customer understanding.
              </p>
    
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-fit"
              >
                More About Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
    
          {/* --- Bottom Stats --- */}
          <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center border-t border-gray-200 pt-10">
            <div>
              <h3 className="text-4xl font-bold text-green-700">15+</h3>
              <p className="text-gray-600 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">89K</h3>
              <p className="text-gray-600 text-sm mt-1">Clients Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">32+</h3>
              <p className="text-gray-600 text-sm mt-1">Awards & Honors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">97+</h3>
              <p className="text-gray-600 text-sm mt-1">Happy Clients</p>
            </div>
          </div>
        </section>
  )
}

export default page