import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avanya Pratap Service and Construction",
    template: "%s | Avanya Group",
  },
  description:
    "Avanya Pratap Service and Construction is a registered government contractor delivering civil infrastructure and public sector services across India.",
  keywords: [
    "government contractor India",
    "civil construction",
    "infrastructure services",
    "government tender",
    "public sector projects",
    "Avanya Group",
  ],
  authors: [{ name: "Avanya Group" }],
  metadataBase: new URL("https://avanyagroup.in"),
  openGraph: {
    title: "Avanya Pratap Service and Construction",
    description:
      "Registered government contractor for civil infrastructure and public sector project execution across India.",
    url: "https://avanyagroup.in",
    siteName: "Avanya Group",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 400,
        alt: "Avanya Group",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avanya Pratap Service and Construction",
    description:
      "Registered government contractor delivering civil infrastructure and public sector services across India.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
