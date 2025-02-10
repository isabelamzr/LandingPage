import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css' 
import StarsCanvas from "@/components/main/starbackground/StarBackground";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "imzr",
  description: "landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
    
        <StarsCanvas />
        
        {children}
      </body>
    </html>
  );
}

