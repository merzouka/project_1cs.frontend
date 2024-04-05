"use client";
import { NavBar } from "@/app/(drawing-settings)/components/nav-bar/main";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-dvh">
            <NavBar />
            <div className="size-full h-dvh">
                {children}
            </div>
        </div>
    );
}
