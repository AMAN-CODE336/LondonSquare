import { FaFacebookF, FaInstagram, FaYoutube  } from "react-icons/fa";
import Link from "next/link";


export default function Footer(){
    return (
        <>
      <footer className="bg-gray-900 mt-12 text-gray-200 py-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Logo & Tagline */}
    <div className="border-r border-gray-700 pr-4">
 
 <img
            src="/logo-img-removebg-preview (1).png"
            alt="Logo"
            className="w-auto h-20 md:h-20 object-contain  "
          />
          
          <p className="mt-2 text-sm text-gray-400">
        Near To IT City - Mohali
      </p>
    </div>

    {/* Contact Info */}
    <div className="border-r border-gray-700 gap-4 pr-4">
      <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
      <p className="text-sm">Mohali Airport Road, Near Tangori college, National Highway 205,Bharatmala Expressway,<br />Banur to Mohali, Punjab </p>
      <p className="text-sm mt-1 flex flex-col gap-1">
   <a href="tel:+919569317878">📞+91 95693 17878</a><a href="tel:+918282858572"> 📞+91 8282858572</a>
</p>

<p className="text-sm">
  📧 <a href="mailto:marketing@londonsquare.in" className="text-blue-600 hover:underline">marketing@londonsquare.in</a>
</p>
    </div>

    {/* Quick Links */}
    <div className="border-r border-gray-700 pr-4">
      <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
      <ul className="text-sm space-y-1">
        <li><Link href="/privacy-policy"><p  className="hover:text-white transition">Privacy Policy</p></Link></li>
        <li><Link href="/terms-condition"><p  className="hover:text-white transition">Terms & Conditions</p></Link></li>
      </ul>
    </div>

    {/* Social Media */}
    <div className="pl-4">
      <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
      <div className="flex space-x-4 mt-2">
        <Link href="https://www.facebook.com/mdbgroupzrk/photos/london-square-the-latest-commercial-masterpiece-by-mdb-group-where-prime-locatio/440622495546839/" className="hover:text-white transition"><FaFacebookF /></Link>
        <Link href="https://www.instagram.com/reel/C6wHlwJp-HW/" className="hover:text-white transition"><FaInstagram /></Link>
         <Link href="#" className="hover:text-white transition"><FaYoutube /></Link>
      </div>
    </div>
    
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} LONDONSQUARE. All rights reserved. | Designed By <strong> <a href="https://webczarsolutions.com/">Webczar Solutions</a></strong>
  </div>
</footer>


        </>
    )
}