import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "TechNest",
  description: "E-commerce application based on NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
