"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Tab {
    icon: (className?: string) => React.ReactNode,
    display: string,
    id: string,
    link: string,
}

export const NavTabs = ({ tabs }: { tabs: Tab[] }) => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-col" aria-orientation="vertical" role="tablist">
            {
                tabs.map((tab, index) => {
                    return (
                        <Button 
                            key={tab.id}
                            variant="link" tabIndex={-1} 
                            aria-selected={tab.link == pathname || index == 0}
                            className={cn(
                                "flex justify-between items-center group hover:no-underline pe-0",
                                tab.link == pathname && "text-orange-400"
                            )}
                            role="tab"
                        >
                            <Link href={tab.link} className={cn(
                                "flex grow justify-start items-center gap-x-4 w-full h-full underline-0 text-base ps-3 group-hover:text-color-700",
                            )}>
                                {tab.icon("text-inherit")}
                                <span className="text-black group-hover:text-orange-500 text-inherit">{tab.display}</span>
                            </Link>
                            <div className={cn(
                                "w-1 h-full bg-black group-hover:bg-orange-500 rounded-l-md hidden md:block",
                                tab.link == pathname && "bg-orange-500",
                            )}></div>
                        </Button>
                    );
                })
            }
        </ul>
    );
}
