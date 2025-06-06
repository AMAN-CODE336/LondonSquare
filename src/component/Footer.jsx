import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
      <p className="text-sm">Mohali Airport Road, Near Tangori college, National Highway 205,<br />Banur to Mohali, Punjab </p>
      <p className="text-sm mt-1">📞  +91 95693 17878 ||  8282858572</p>
      <p className="text-sm">📧 marketing@londonsquare.in</p>
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
        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
        <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-white transition"><FaTwitter /></a>
      </div>
    </div>
    
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} LONDONSQUARE. All rights reserved. || Designed By <strong> <a href="https://webczarsolutions.com/">webczar solutions</a></strong>
  </div>
</footer>


        </>
    )
}