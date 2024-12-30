import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Eshtex Entertainment",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`bg-white antialiasd relative`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
