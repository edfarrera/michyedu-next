import { Poppins, Beau_Rivage, Cinzel } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const beau = Beau_Rivage({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-beau",
});

export const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});
