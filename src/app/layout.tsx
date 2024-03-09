import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/providers/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ 
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
                "min-h-screen font-sans antialiased",
                inter.variable
            )}>
                <QueryProvider>
                    {children}
                    <ReactQueryDevtools />
                </QueryProvider>     
            </body>
        </html>
    );
}
