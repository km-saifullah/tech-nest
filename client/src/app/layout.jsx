import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "TechNest",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
