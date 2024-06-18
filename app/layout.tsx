import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";
import { NavBar } from "@/components/navBar";

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
      <body className={`${poppins.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
