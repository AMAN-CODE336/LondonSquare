import CarouselBox from "./CarouselBox";
export default function ProgressSection() {
  return (
    <main className="min-h-screen  py-12 px-4">
                <div className="text-3xl flex gap-2 font-bold items-center justify-center  mb-24"><p className='text-[#c26265]'>Progress</p><p className='text-black'>Update</p> </div>

      <div className="max-w-7xl mb-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <CarouselBox
          images={[
            "/20250611_163830.jpg",
            "/20250611_163843.jpg",
            "/20250611_163903.jpg",
          ]}
          alt="Box 1"
        />
        <CarouselBox
          images={[
            "/20250611_163912.jpg",
            "/20250611_163935.jpg",
            "/20250611_163941.jpg",
          ]}
          alt="Box 2"
        />
        <CarouselBox
          images={[
            "/20250611_163948.jpg",
            "/20250611_163830.jpg",
            "/20250611_163912.jpg",
          ]}
          alt="Box 3"
        />
      </div>
    </main>
  );
}
