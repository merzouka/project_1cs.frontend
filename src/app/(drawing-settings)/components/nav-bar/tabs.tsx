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

export const Tabs = () => {
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
                            className="flex justify-center items-center group border-l-3 border-left-black group-hover:border-l-orange-400 group-hover:bg-orange-200"
                            role="tab"
                        >
                            <Link href={tab.link} className="flex justify-center items-center gap-x-4 w-full h-full underline-0">
                                {tab.icon}
                                <span className={styles}>{tab.display}</span>
                            </Link>
                        </Button>
                    );
                })
            }
        </ul>
    );
}
