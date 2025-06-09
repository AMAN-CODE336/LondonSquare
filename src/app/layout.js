import "./globals.css";
import Navbar from "@/component/navbar";
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: "London Square",
  description: "Near To IT City - Mohali",
  icons: {
    icon: '/Favicon.png',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
