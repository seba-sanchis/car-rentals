import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Rentals",
  description:
    "Great deals at great prices, from the biggest car hire companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
