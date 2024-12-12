import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Signature Generator",
  description: "Create professional and eye-catching email signatures with ease using our Email Signature Generator. Designed for individuals and businesses alike, our platform helps you craft stunning signatures that elevate your email communication. Whether you’re looking to enhance your personal branding or establish a strong corporate identity, our tool provides the perfect solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
