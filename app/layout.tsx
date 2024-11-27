import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmMono = DM_Mono({ subsets: ["latin"],  weight: ["300", "400", "500"]});

export const metadata: Metadata = {
  title: "Yen Lam",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmMono.className}`}>
        {children}
      </body>
    </html>
  );
}
