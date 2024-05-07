import { Poppins, Rokkitt } from "next/font/google";
import { Inter } from "next/font/google";

export const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export const inter = Inter({
    subsets: ["latin"],
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500"],
});
