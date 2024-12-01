import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
    <html lang="en">
      
      <body
        className={`bg-black antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
