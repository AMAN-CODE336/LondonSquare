"use client"
import { FaCarAlt } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiCctvCamera } from "react-icons/gi";
import { GiDoubleStreetLights } from "react-icons/gi";
import { motion } from "framer-motion";
import { MdOutlineSecurity } from "react-icons/md";

export default function KeyHighlights() {
  const highlights = [
    {
      icon: <FaCarAlt size={48} className='' />,
      title: 'Car Parking',
    },
    {
      icon: <GiElevator size={48} className=''/>,
      title: ' Lift Access',
    },
    {
      icon: <HiBuildingOffice2 size={48} className=''/>,
      title: 'Above Commercial Property',
    },
    {
      icon: <MdOutlineSecurity size={48} className='' />,
      title: '2-Tier Security',
    },
    {
      icon: <GiCctvCamera size={48} className=''/>,
      title: 'CCTV Surveillance',
    },
     {
      icon: <GiDoubleStreetLights size={48} className='' />,
      title: 'LED StreetLights',
    },
  ];

  return (
    <motion.section 
    initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  viewport={{ once: true }}
    className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl flex gap-2 font-bold items-center justify-center  mb-12"><p className='text-black'>Key</p><p className='text-[#c26265]'>Highlights</p> </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}