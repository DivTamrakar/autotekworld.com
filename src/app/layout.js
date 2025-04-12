"use client"; // ✅ This tells Next.js it's a client component

import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap globally
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/+919794800900"
          className={`whatsapp-float ${showWhatsApp ? "show" : "hide"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsap_icon/W_icon.png" alt="WhatsApp" className="whatsapp-icon" />
        </a>

        <Footer/>
      </body>
    </html>
  );
}
