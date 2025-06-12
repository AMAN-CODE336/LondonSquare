import CarouselBox from "./CarouselBox";
export default function ProgressSection() {
  return (
    <main id="Progress" className="min-h-screen  py-12 px-4">
                <div className="text-3xl flex gap-2 font-bold items-center justify-center  mb-16"><p className='text-[#c26265]'>Site</p><p className='text-black'>Progress</p> </div>

      <div className="max-w-7xl mb-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="flex flex-col items-center">
    <CarouselBox
      images={[
        "/vlcsnap-2025-06-12-12h54m37s471.png",
        "/vlcsnap-2025-06-12-12h58m43s967.png",
        "/vlcsnap-2025-06-12-12h59m12s294.png",
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
        "/vlcsnap-2025-06-12-13h15m27s563.png",
        "/vlcsnap-2025-06-12-13h24m54s137.png",
        "/vlcsnap-2025-06-12-13h25m00s332.png",
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
        "/vlcsnap-2025-06-12-14h07m13s585.png",
        "/vlcsnap-2025-06-12-14h07m37s957.png",
        "/vlcsnap-2025-06-12-14h07m46s473.png",
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
