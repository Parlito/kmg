import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Clínica Kmg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={lato.className}>
      <Header/>
      {children}</body>
    </html>
  );
}
