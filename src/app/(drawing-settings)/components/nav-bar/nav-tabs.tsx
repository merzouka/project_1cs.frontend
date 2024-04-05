"use client"
import { GiCardPickup } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
    icon: React.ReactNode,
    display: string,
    id: string,
    link: string,
}

const styles = "text-black group-hover:text-orange-400"
const tabs: Tab[] = [
    {
        icon: <GiCardPickup className={styles}/>,
        display: "Tirage au sort",
        id: "drawing-settings",
        link: "/drawing/settings",
    }
]

export const NavTabs = () => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-col gap-y-2" aria-orientation="vertical" role="tablist">
            {
                tabs.map((tab, index) => {
                    return (
                        <Button 
                            key={tab.id}
                            variant="link" tabIndex={-1} 
                            aria-selected={tab.link == pathname || index == 0}
                            className="flex justify-center items-center group hover:no-underline pe-0"
                            role="tab"
                        >
                            <Link href={tab.link} className="flex grow justify-center items-center gap-x-4 w-full h-full underline-0 text-base">
                                {tab.icon}
                                <span className={styles}>{tab.display}</span>
                            </Link>
                            <div className="w-1 h-full bg-black group-hover:bg-orange-400 rounded-l-sm hidden md:block"></div>
                        </Button>
                    );
                })
            }
        </ul>
    );
}
