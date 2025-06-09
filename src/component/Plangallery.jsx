"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const planImages = [
  {
    src: "/Untitled design (9).png",
    title: "Basement Floor plan",
  },
  // {
  //   src: '/Untitled design (10).png',
  //   title: 'Lower ground floor plan',
  // },
  {
    src: "/Untitled design (11).png",
    title: "upper ground floor plan",
  },

  // {
  //   src: '/Untitled design (12).png',
  //   title: 'first floor plan ',
  // },
  // {
  //   src: '/Untitled design (13).png',
  //   title: 'second floor plan ',
  // },
  {
    src: "/Untitled design (14).png",
    title: "third floor plan ",
  },

  {
    src: "/Untitled design (15) (1).png",
    title: "single unit plan",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

export default function PlanGallery() {
  const imagesExceptLast = planImages.slice(0, -1);
  const lastImage = planImages[planImages.length - 1];

  return (
    <section id="Plans" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Project Plans & Layouts
        </h3>

        {/* Mobile/Tablet Masonry with all images */}
        <div className="block lg:hidden">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="flex flex-col gap-6"
          >
            {planImages.map((plan, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white"
              >
                <Image
                  src={plan.src}
                  alt={plan.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center font-medium uppercase text-gray-700">
                  {plan.title}
                </div>
              </div>
            ))}
          </Masonry>
        </div>

        {/* Desktop: Masonry grid without last + centered last image */}
        <div className="hidden lg:block">
          {/* Masonry without last image */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="flex flex-col gap-6"
          >
            {imagesExceptLast.map((plan, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white"
              >
                <Image
                  src={plan.src}
                  alt={plan.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center font-medium uppercase text-gray-700">
                  {plan.title}
                </div>
              </div>
            ))}
          </Masonry>

          <div className="mt-12 pl-34 pr-34">
            <div className="rounded-lg  overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white w-full">
              <Image
                src={lastImage.src}
                alt={lastImage.title}
                width={1200}
                height={400}
                className="w-full  h-auto object-cover"
              />
              <div className="p-4 text-center font-medium uppercase text-gray-700">
                {lastImage.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
