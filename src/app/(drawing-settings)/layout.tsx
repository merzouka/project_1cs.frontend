"use client";
import { NavBar } from "@/app/(drawing-settings)/components/nav-bar/main";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-dvh">
            <NavBar />
            <div className="pt-16 md:pt-8 p-2 md:p-8 size-full">
                {children}
            </div>
        </div>
    );
}
