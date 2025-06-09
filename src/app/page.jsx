import Herosection from "@/component/Herosection";
import KeyHighlights from "@/component/Highlightsection";
import PlanGallery from "@/component/Plangallery";
import AboutSection from "@/component/AboutSection";
import ImageGallery from "@/component/ImageGallery";
import ContactSection from "@/component/ContactSection";
import Footer from "@/component/Footer";
import Link from "next/link";
import { PhoneCall, MapPin } from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "@/component/WhatsappBtn";
import ClientLoaderWrapper from "@/component/ClientLoaderWrapper";
export default function page() {
  return (
    <>
      <ClientLoaderWrapper>
        <Herosection />
        {/* <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">The Grand Commercial Avenue</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          An Iconic Commercial Landmark Designed for the Future
        </p>
        <div className="mt-8">
          <Image
            src="/images/commercial-building.jpg"
            alt="Grand Commercial Avenue"
            width={1200}
            height={700}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section> */}

        <div className="bg-[#c26265] text-white  py-8 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:pl-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg">
              Let's start the conversation — we're here to turn your plans into
              reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://wa.me/9569317878">
              <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#635800] transition">
                <PhoneCall size={18} />
                <span>+91 95693 17878</span>
              </button>
            </Link>

            <Link href= "#Contactsection">
              <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#635800] transition">
                <MapPin size={18} />
                <span>REQUEST A SITE VISIT</span>
              </button>
            </Link>
          </div>
        </div>

        <KeyHighlights />

        <PlanGallery />
        <AboutSection />
        <ImageGallery />
        <ContactSection />
<WhatsAppButton/>
        <Footer />
      </ClientLoaderWrapper>
    </>
  );
}
