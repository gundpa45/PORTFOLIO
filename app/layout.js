import { Inter, Playfair_Display } from "next/font/google";
import "./globals.scss";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600"]
});

export const metadata = {
  title: "Vishnu Rathod — Creative Developer",
  description: "Portfolio of Vishnu Rathod — a creative full-stack developer crafting high-performance web experiences.",
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
