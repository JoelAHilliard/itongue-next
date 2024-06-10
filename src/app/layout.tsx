import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iTongue",
  description: "Get information on your tongue health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header>
          <Header />
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
