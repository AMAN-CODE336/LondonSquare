"use client"

import { motion } from "framer-motion";
import Image from "next/image";
export default function ImageGallery() {
const images = [
  '/woman-cooking-kitchen.jpg',
  '/woman-cooking-kitchen (1).jpg',
  '/small-juvenile-bedroom-arrangement.jpg',
  '/room-interior-hotel-bedroom.jpg',
  '/modern-style-small-bathroom-with-furnishings.jpg',
    '/3d-rendering-modern-luxury-bedroom-suite-bathroom.jpg',
    '/small-juvenile-bedroom-arrangement (1).jpg',
    '/small-bathroom-with-modern-design.jpg',
];
    
  return (
   <motion.section
   initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
   id="Gallerysection" className="py-12 bg-white">
      <div className="max-w-7xl  mx-auto px-4">
<div className="flex flex-wrap gap-4 justify-center">
  {images.map((src, idx) => (
    <div
      key={idx}
      className="w-full sm:w-[48%] md:w-[23%] rounded-xl shadow-md object-cover"
    >
      <Image
        src={src}
        alt={`Plan ${idx + 1}`}
        width={800}
        height={600}
        className="w-full h-full rounded-xl object-cover"
      />
    </div>
  ))}
</div>

    </div>
    </motion.section>
  );
}