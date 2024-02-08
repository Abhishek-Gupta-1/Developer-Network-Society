import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/basic/Navbar";
import Contact from "./components/Contact"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNS",
  description: "Developed and Maintained by Abhishek Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
       
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
