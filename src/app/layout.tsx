import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
   title: "E-Commerce App",
   description: "E-Commerce app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
               <div className="flex-1 flex flex-col h-full">{children}</div>
            </main>
            <Footer />
            <Toaster position="top-center" richColors />
         </body>
      </html>
   );
}
