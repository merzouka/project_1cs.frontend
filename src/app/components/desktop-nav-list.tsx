"use client";
import { pages } from "./nav-items";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const DesktopNavList = () => {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex flex-grow h-full justify-center items-center">
            <ul className="flex items-center justify-center gap-x-5">
                {
                    pages.map((page) => (
                        <li key={page.id} className={cn(
                            "font-semibold text-gray-600 hover:text-orange-500",
                            page.link == pathname && "text-orange-400",
                        )}>
                            <Link href={page.link}>{page.display}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
