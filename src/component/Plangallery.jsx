"use client";

import Image from "next/image";

const planImages = [
  {
    src: "/Untitled design (9).png",
    title: "Basement Floor plan",
  },
  {
    src: "/Untitled design (11).png",
    title: "upper ground floor plan",
  },
  {
    src: "/Untitled design (13).png",
    title: "second floor plan ",
  },
  {
    src: "/Untitled design (14).png",
    title: "third floor plan ",
  },
  {
    src: "/Untitled design (15) (1).png",
    title: "single unit plan",
  },
];

export default function PlanGallery() {
  const upperImages = planImages.slice(0, -1); // All except last
  const lastImage = planImages[planImages.length - 1]; // Last image only

  return (
    <section id="Plans" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Project Plans & Layouts
        </h3>

        {/* Top Grid for all except last */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upperImages.map((plan, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white"
            >
              <Image
                src={plan.src}
                alt={plan.title}
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-4 text-center font-medium uppercase text-gray-700">
                {plan.title}
              </div>
            </div>
          ))}
        </div>

        {/* Last image in its own layout below */}
        <div className="mt-12">
          <div className="rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 bg-white w-full max-w-4xl mx-auto">
            <Image
              src={lastImage.src}
              alt={lastImage.title}
              width={1200}
              height={450}
              className="w-full object-cover"
            />
            <div className="p-4 text-center font-medium uppercase text-gray-700">
              {lastImage.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
