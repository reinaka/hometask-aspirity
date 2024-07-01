import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aspirity",
  description: "Корпоративный портал",
  icons: {
    icon: './favicon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          Header
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
