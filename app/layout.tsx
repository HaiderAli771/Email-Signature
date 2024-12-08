import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextSig Email Signature Generator",
  description: "Email Signature Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>NextSig Email Signature Generator</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
