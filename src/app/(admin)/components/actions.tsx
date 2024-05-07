"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { PiGearSixLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Action {
    link: string;
    id: string;
    display: string;
    icon: React.ReactNode;
}

function getActions(profileLink: string): Action[] {
    return [
        {
            link: profileLink,
            id: "profile",
            display: "Profile",
            icon: <CiUser />
        },
        {
            link: "/settings",
            id: "settings",
            display: "Paramètres",
            icon: <PiGearSixLight />
        },
        {
            link: "/contact-us",
            id: "contact-us",
            display: "Nous contacter",
            icon: <AiOutlineMessage />
        },
        {
            link: "/",
            id: "home",
            display: "Acceuil",
            icon: <IoHomeOutline />
        },
    ]
}

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const Actions = ({ profileLink }: { profileLink: string }) => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center space-between ps-2 md:ps-5">
            {
                getActions(profileLink).map((action) => {
                    return (
                        <Button tabIndex={-1} variant="link" key={action.id} className="w-full group flex md:pe-0 hover:no-underline">
                            <Link 
                                href={action.link} 
                                className={cn(
                                    "flex justify-center md:justify-start gap-x-2 w-full",
                                    "group-hover:text-orange-400 grow hover:no-underline ",
                                    "items-center text-base text-slate-400",
                                    pathname == action.link && "text-orange-600",
                                    poppins.className
                                )}
                            >
                                {action.icon}
                                {action.display}
                            </Link>
                            <div className={cn(
                                "hidden group-hover:block rounded-l-sm bg-orange-400 w-1 h-full",
                                pathname == action.link && "block"
                            )}></div>
                        </Button>
                    );
                })
            }
        </div>
    );
}
