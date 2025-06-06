import "./globals.css";
import Navbar from "@/component/navbar";
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: "My App",
  description: "Your app description here",
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
