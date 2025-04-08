import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
               <div className="flex-1 flex flex-col h-full">
                  <Providers>{children}</Providers>
               </div>
            </main>
            <Footer />
            <Toaster position="top-center" richColors />
         </body>
      </html>
   );
}
