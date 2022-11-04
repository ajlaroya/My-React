import { Inter } from "@next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopProvider from "../context/shopContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌺</text></svg>"
        />
      </head>
      <body>
        <ShopProvider>
          <Navbar />
          {children}
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
