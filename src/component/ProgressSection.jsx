import CarouselBox from "./CarouselBox";
export default function ProgressSection() {
  return (
    <main id="Progress" className="min-h-screen  py-12 px-4">
                <div className="text-3xl flex gap-2 font-bold items-center justify-center  mb-16"><p className='text-[#c26265]'>Site</p><p className='text-black'>Progress</p> </div>

      <div className="max-w-7xl mb-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="flex flex-col items-center">
    <CarouselBox
      images={[
        "/20250611_163830.jpg",
        "/20250611_163843.jpg",
        "/20250611_163903.jpg",
      ]}
      alt="Box 1"
    />
    <p className="mt-3 text-center text-sm text-gray-700 font-medium">
      <span className="block text-base font-semibold text-[#c26265]">Stage 1</span>
      The starting of construction
    </p>
  </div>

  <div className="flex flex-col items-center">
    <CarouselBox
      images={[
        "/20250611_163912.jpg",
        "/20250611_163935.jpg",
        "/20250611_163941.jpg",
      ]}
      alt="Box 2"
    />
    <p className="mt-3 text-center text-sm text-gray-700 font-medium">
      <span className="block text-base font-semibold text-[#c26265]">Stage 2</span>
      Foundation and structure development
    </p>
  </div>

  <div className="flex flex-col items-center">
    <CarouselBox
      images={[
        "/20250611_163948.jpg",
        "/20250611_163830.jpg",
        "/20250611_163912.jpg",
      ]}
      alt="Box 3"
    />
    <p className="mt-3 text-center text-sm text-gray-700 font-medium">
      <span className="block text-base font-semibold text-[#c26265]">Stage 3</span>
      Now finished — the construction was completed in the beginning of 2026.
    </p>
  </div>
</div>

    </main>
  );
}
