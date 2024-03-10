import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yunus Emre Mert",
  description: "Yunus Emre Mert'in kişisel web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
