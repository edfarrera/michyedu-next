import type { Metadata } from "next";
import "./globals.css";
import { cinzel, poppins } from "@/app/ui/fonts";
import { NavBar } from "@/components/navBar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Michelle & Eduardo",
  description: "Invitación para la boda de Michlle y Eduardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${cinzel.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
