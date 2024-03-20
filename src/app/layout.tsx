import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/providers/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const montserrat = Montserrat({ 
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "El Hajj",
    description: "A website for managing the Hajj process",
};

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body className={cn(
                "min-h-dvh font-sans antialiased",
                montserrat.variable
            )}>
                <QueryProvider>
                    {children}
                    <ReactQueryDevtools />
                </QueryProvider>     
            </body>
        </html>
    );
}
