import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Signature Generator",
  description: "Create stunning and professional email signatures effortlessly with our Email Signature Generator. Whether you're an individual or a business, our platform lets you design unique, customizable signatures that reflect your brand and leave a lasting impression. Choose from sleek templates, add your personal or company details, include social media links, and upload your logo in minutes.Elevate your email communications with ease and showcase your professionalism with every message.Rest assured, all your data is handled securely, ensuring your email signature creation is both safe and private.",
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
