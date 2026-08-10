import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WhenToReplace — Product Lifespan Database",
  description: "Data-driven replacement timing for 500+ products. Know exactly when to replace anything with manufacturer data, consumer reports, and real-world failure analysis.",
  keywords: "product lifespan, when to replace, appliance lifespan, replacement guide, home maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
