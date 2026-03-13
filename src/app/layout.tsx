import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jae Beck | Orange County Real Estate Expert",
  description: "Find your dream home in Orange County, CA with trusted Realtor Jae Beck. Specializing in Irvine, Newport Beach, Laguna Hills, and more.",
  keywords: "Orange County Real Estate, Realtor, Jae Beck, Homes for Sale, Irvine, Laguna Hills",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
