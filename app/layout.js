import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/nav_bar";
import Footer from "./(components)/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SnapLood.com: The Ultimate Free Video Downloader",
  description: "SnapLood.com offers a fast, secure, and easy way to download high-quality videos from YouTube, TikTok, Facebook, Instagram, Twitter, and more—completely free! No sign-ups, no watermarks, and no hidden charges. Enjoy hassle-free downloads in HD to 4K resolutions directly in your browser, with support for multiple devices and platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
