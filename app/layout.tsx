import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Email Signature Generator | 10+ Professional Templates by NextSig",
  description: "Design professional email signatures with our free email signature generator. Choose from 10+ customizable templates for personal or business use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-PPQJVNC4NL" />
    </html>
  );
}
