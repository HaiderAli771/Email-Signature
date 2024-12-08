import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
<head>
  <meta name="google-site-verification" content="4zq3kiTLUKsY9zGoZ44txOmTpZqYYcd4TtbUZ--iXno" />
</head>
export const metadata: Metadata = {
  title: "NextSig",
  description: "Email Signature Generator",
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
