"use client";
import Link from "next/link";
import { tabs } from "./side-bar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const DesktopSide = () => {
    const pathname = usePathname();
    return (
        <aside className="min-h-full w-2/12 hidden md:block p-3 pt-5 pr-0">
            <ul>
                {
                    tabs.map((tab) => (
                        <li key={tab.id}>
                            <Link 
                                href={tab.link} 
                                className={cn(
                                    "flex gap-x-3 w-full h-full mb-3 text-gray-500 items-center font-medium group",
                                )}
                            >
                                {tab.icon(pathname == tab.link ? "text-orange-400" : "")}
                                <span className={cn(
                                     "group-hover:text-orange-300",
                                    pathname == tab.link && "text-orange-400"
                                )}>{tab.display}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}
