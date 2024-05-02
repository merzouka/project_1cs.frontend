"use client";
import { Button } from "@/components/ui/button";
import { tabs } from "./side-bar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const MobileSide = () => {
    const pathname = usePathname();

    return (
        <div className="flex justify-stretch items-center w-full md:hidden">
            {
                tabs.map((tab) => (
                    <Button
                        className={cn(
                            "hover:bg-transparent bg-transparent hover:text-orange-300 w-full",
                            "group border-b border-b-transparent hover:border-b-orange-300 rounded-none",
                            pathname == tab.link && "border-b-orange-400"
                        )} 
                    >
                        <Link href={tab.link} className="w-full h-full flex items-center justify-center">
                            {tab.icon(pathname == tab.link ? "text-orange-400": " text-gray-500")}
                        </Link>
                    </Button>
                ))
            }
        </div>
    );
}
