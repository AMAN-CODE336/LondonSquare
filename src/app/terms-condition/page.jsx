import React from 'react';
import Link from "next/link";

export default function TermsAndConditions() {
  return (
   
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 mt-12 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-[#1e429f] mb-4">Terms and Conditions</h1>
        <p className="mb-4 text-sm text-gray-500">Effective Date: [Insert Date]</p>

        <p className="mb-6">
          Welcome to <strong>London square</strong>! Please read these Terms and Conditions carefully before using our website <strong>[yourwebsite.com]</strong> operated by <strong>Webczar Solutions</strong>.
        </p>

        <p className="mb-6">
          By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">1. Use of Our Service</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use and enjoyment of the Service.</li>
          <li>You must not misuse our Service by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">2. Intellectual Property</h2>
        <p className="mb-6">
          All content, trademarks, logos, and intellectual property displayed on the Service are owned by or licensed to <strong>Webczar Solutions</strong>. You may not reproduce, distribute, or create derivative works from any content without prior written permission.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">3. User Content</h2>
        <p className="mb-6">
          You are responsible for any content you post or share on the Service. You agree not to upload content that is illegal, offensive, defamatory, or infringes on others' rights.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">4. Privacy</h2>
        <p className="mb-6">
          Your use of the Service is also governed by our{' '}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">5. Disclaimer</h2>
        <p className="mb-6">
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, about the accuracy, reliability, or availability of the Service.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">6. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall <strong>Webczar Solutions</strong> be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">7. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify or replace these Terms at any time. Updates will be posted on this page with the updated effective date.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e429f] mb-2">8. Contact Us</h2>
        <p>
          <strong>London Square</strong><br />
          Mohali Airport Road, Near Tangori college, National Highway 205,<br />Banur to Mohali, Punjab  <br />
          📧{' '}
          <a href="mailto:marketing@londonsquare.in" className="text-blue-600 underline">
            marketing@londonsquare.in
          </a><br />
          📞 +91 95693 17878
        </p>
      </div>
    </div>
    
  );
}
