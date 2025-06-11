// components/AboutSection.tsx
"use client"

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";


export default function AboutSection() {
const stats = [
  { label: "Units Available", value: 80, suffix: "+" },
  { label: "Happy Investors", value: 50, suffix: "+" },
  { label: "Channel Partners", value: 120 , suffix : "+" },
  { label: "On-time Delivery", value: 100 , suffix : "%" },
];

  return (
    <section  className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full">
  <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md">
    <video
    controls
      autoPlay
      muted
      loop
      playsInline
      className="object-cover w-full h-full"
    >
      <source src="/London-square.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <h2 className="text-xs text-gray-600 mt-4 text-center px-4">
    This 3D animation is created for illustration and concept visualization only. Any trademarks, logos, or brand names shown are used for representational purposes and do not indicate any official connection, sponsorship, or approval from the respective brand owners.
  </h2>
</div>





        {/* Right: Text */}
        <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  viewport={{ once: true }}
>
  <div className='sm:flex   lg:gap-2'>
  <h2 className="text-3xl font-bold text-[#c26265] lg:mb-4">
            About The 
          </h2>
          <h2 className="text-3xl font-bold text-black mb-4">
             London Square
          </h2>
          </div>
          <p className="text-gray-600 text-lg mb-6">
           With over <strong>15 years</strong> of expertise in developing premium Residential or commercial  properties, 
          <strong> London Square</strong> is a landmark destination designed for businesses aiming to grow, 
          scale, and thrive. Every layout—from office towers , Residential Appartment and retail spaces to luxury showrooms—has been crafted to deliver 
          <strong> high returns</strong> and ensure a <strong> powerful brand presence</strong>.
          </p>

            <div className="grid grid-cols-2 gap-6 text-center">
      {stats.map((stat, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.3, // Trigger when 30% visible
        });

        return (
          <div key={index} ref={ref}>
            {typeof stat.value === "number" ? (
              <CountUp
                start={0}
                end={inView ? stat.value : 0}
                duration={3}
                suffix={stat.suffix}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="text-4xl font-extrabold text-[#c26265]"
                  />
                )}
              </CountUp>
            ) : (
              <p className="text-4xl font-extrabold text-[#c26265]">{stat.value}</p>
            )}
            <p className="text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
       
        </motion.div>
      </div>
    </section>
  );
}
