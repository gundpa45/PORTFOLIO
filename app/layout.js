import { Outfit } from "next/font/google";
import "./globals.scss";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Modern, premium portfolio showcasing full-stack development projects.",
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
