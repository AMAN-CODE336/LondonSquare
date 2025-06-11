import CarouselBox from "./CarouselBox";
export default function ProgressSection() {
  return (
    <main className="min-h-screen  py-12 px-4">
                <div className="text-3xl flex gap-2 font-bold items-center justify-center  mb-24"><p className='text-[#c26265]'>Progress</p><p className='text-black'>Update</p> </div>

      <div className="max-w-7xl mb-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <CarouselBox
          images={[
            "/construction-modern-skyscrapers (1).jpg",
            "/construction-modern-skyscrapers (1).jpg",
            "/construction-modern-skyscrapers (1).jpg",
          ]}
          alt="Box 1"
        />
        <CarouselBox
          images={[
            "/construction-modern-skyscrapers (1).jpg",
            "/construction-modern-skyscrapers (1).jpg",
            "/construction-modern-skyscrapers (1).jpg",
          ]}
          alt="Box 2"
        />
        <CarouselBox
          images={[
            "/construction-modern-skyscrapers (1).jpg",
            "/images/box3-2.jpg",
            "/images/box3-3.jpg",
          ]}
          alt="Box 3"
        />
      </div>
    </main>
  );
}
