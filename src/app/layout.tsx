// src/app/layout.tsx
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-20 flex flex-col min-h-screen bg-white text-black">
        <Navbar />

        <PageTransitionWrapper>{children}</PageTransitionWrapper>

        <Footer />
      </body>
    </html>
  );
}
