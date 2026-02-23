import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import InteractiveBg from "@/components/InteractiveBg";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ FAVICON – GUARANTEED */}
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Loader />
        <InteractiveBg />
        <CustomCursor />

        {/* ✅ NAVBAR (GSAP CLIENT) */}
        <Navbar />

        <PageTransition>{children}</PageTransition>

        <Footer />
      </body>
    </html>
  );
}
