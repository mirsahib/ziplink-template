import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
// adding comment form deployment
export const metadata: Metadata = {
  title: "Ziplink | Unlock Your Link Potential",
  description: "Unlock Your Link Potential",
  icons:[{url:'/favicon/favicon-16x16.png'}]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
