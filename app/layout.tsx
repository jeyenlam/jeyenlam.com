import type { Metadata } from "next";
import { DM_Mono, Questrial } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css";
import { AppContextProvider } from "./context";

const dmMono = DM_Mono({
  subsets: ["latin"], 
  variable: '--font-dmMono',
  weight: ["300", "400", "500"],
  display: "swap",
});

const commissioner = Questrial({
  subsets: ["latin"],
  variable: '--font-commissioner',
  weight: ["400"],
  display: "swap",
});

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
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${dmMono.variable} ${commissioner.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppContextProvider>
              {children}
            </AppContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
