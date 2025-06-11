// SimpleSwiperCarousel.jsx

"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay , Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/image-2nd.jpg',
    title: 'Welcome to London Square',
    subtitle: 'A landmark commercial destination offering premium retail shops and office spaces in the heart of Zirakpur.',
  },
  {
    image: '/image-3rd.jpg',
    title: 'Invest at the Prime Location of Zirakpur',
    subtitle: 'Maximum visibility, high footfall, and rapid commercial growth — all in one place.',
  },
  {
    image: '/image-4th.jpg',
    title: 'Smart Spaces Designed for Business Success',
    subtitle: 'London Square features modern architecture, ample parking, 24x7 security, and Vastu-compliant planning.',
  },
];

export default function Herosection() {
  return (
     <div id='Home' className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
  <div className="relative w-full h-[80vh] md:h-full">
   <Image
  src={slide.image}
  alt={`Slide ${index + 1}`}
  layout="fill"
  className="object-cover"
/>

{/* <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex flex-col items-start justify-center p-4 text-center">
      <h2 className="text-black text-3xl md:text-4xl font-semibold max-w-2xl mb-2">
        {slide.title}
      </h2>
      <p className="text-black max-w-xl">{slide.subtitle}</p>
    </div> */}

    
  </div>
</SwiperSlide>

        ))}
        
          {/* <div className=" absolute bottom-5 left-5 z-20">
          <div className="custom-pagination flex space-x-4  " />
        </div> */}
              </Swiper>
              <div className=''>
             <div className=" absolute bottom-16  md:bottom-[-50] left-[10rem] lg:left-[18.3rem] right transform -translate-x-1/2 z-20 bg-[#c26265] text-white py-4 lg:py-10 lg:space-y-4 pl-8  rounded-md md:text-center lg:max-w-xl w-full shadow-lg">
  <h2 className="text-xl md:text-5xl  font-bold px-3 uppercase">Studio Apartments</h2>
  <h2 className="text-xl md:text-4xl px-3 uppercase ">Above Commercial Spaces</h2>
  <p className="text-base md:text-xl px-3  md:px-0 tracking-wide uppercase">you're always close to everything you need</p>
</div>
</div>

    </div>
  );
}
