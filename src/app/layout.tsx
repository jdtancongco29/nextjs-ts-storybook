import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from './Components/Menu/Menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equipment Tracker",
  description: "Equipment Tracker System",
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
