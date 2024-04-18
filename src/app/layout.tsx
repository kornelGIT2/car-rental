import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SearchContextProvider } from "@/context/searchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarRental",
  description: "Discover the best cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={cn(" font-sans antialiased", inter.className)}>
          <Navbar />

          {children}

          <Footer />
        </body>
      </html>
    </SearchContextProvider>
  );
}
