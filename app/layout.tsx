import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop.co Ecommerce Design - MACoding4U",
  description: "Shop.co Ecommerce Design - Using Next.js, TailwindCSS - MACoding4U",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
