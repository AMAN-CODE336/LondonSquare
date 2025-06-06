import Herosection from "@/component/Herosection"
import KeyHighlights from "@/component/Highlightsection"
import PlanGallery from "@/component/Plangallery"
import AboutSection from "@/component/AboutSection"
import ImageGallery from "@/component/ImageGallery"
import ContactSection from "@/component/ContactSection"
import Footer from "@/component/Footer"
import Image from "next/image"
import ClientLoaderWrapper from "@/component/ClientLoaderWrapper"
export default function page(){
    return(
        <>
        <ClientLoaderWrapper>
        <Herosection/>
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
       
        <KeyHighlights/>

<PlanGallery/>
<AboutSection/>
<ImageGallery/>
<ContactSection/>
<Footer/>
</ClientLoaderWrapper>
        </>
    )
}