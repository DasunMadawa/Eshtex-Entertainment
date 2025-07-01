import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Manobhawa",
  description: `This is no ordinary concert. For the first time in Sri Lanka, a powerful orchestra will perform music from popular TV series live on stage. 
            Featuring 11 exceptional artists and two unique musical vibes, this event takes audiences on a thrilling journey through iconic soundtracks, 
            reimagined with the emotional depth of a full orchestra. It’s not just a concert—it’s a cinematic voyage through music. Get ready to sail into 
            an orchestral storm and experience a night to remember.`,

  keywords: [
    "Manobhawa",
    "MANOBHAWA",
    "Manobhawa Live In Orchestra",
    "MANOBHAWA LIVE IN ORCHESTRA",
    "manobhawa live in orchestra",
    "මනෝභාව",
    "මනෝබාව",
    "freeze events",
    "freezeevents",
    "Freezeevents",
    "FreezeEvents",
    "Freeze Events",
    "Manobhawa 2025",
    "Sri Lankan music event",
    "Musical concert Colombo",
    "Live orchestral performance",
    "TV series music show",
    "Sinhala musical event",
    "Orchestral experience",
    "Colombo entertainment",
    "Viharamahadevi Open Air Theatre",
    "Live music Sri Lanka",
    "Cultural events Sri Lanka"
  ],
  authors: [{ name: "Manobhawa Team", url: "https://manobhawa.lk" }],
  creator: "Manobhawa Team",
  robots: "index, follow",
  icons: {
    icon: "/Manobhawa - 2025 name Design Tranz.ico", 
  },
  openGraph: {
    title: "Manobhawa",
    description: "Discover events, artists, and unforgettable entertainment experiences.",
    url: "https://manobhawa.lk",
    siteName: "Manobhawa",
    images: [
      {
        url: "/Manobhawa - 2025 name Design Tranz.ico",
        width: 1200,
        height: 630,
        alt: "Manobhawa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Manobhawa",
  //   description: "Discover events, artists, and unforgettable entertainment experiences.",
  //   site: "@eshtexent", // replace with your Twitter handle
  //   creator: "@eshtexent",
  //   images: ["/opengraph-image.jpg"], // same as OG image
  // },
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
