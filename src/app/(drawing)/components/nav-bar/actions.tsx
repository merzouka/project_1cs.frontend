import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { PiGearSixLight } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

interface Action {
    link: string | ((param: string | number | undefined) => string);
    id: string;
    display: string;
    icon: React.ReactNode;
}

const actions: Action[] = [
    {
        link: (param) => `profile/${param}`,
        id: "profile",
        display: "Profile",
        icon: <CiUser />
    },
    {
        link: "settings",
        id: "settings",
        display: "Paramètres",
        icon: <PiGearSixLight />
    },
    {
        link: "contact-us",
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
];

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const Actions = () => {
    const { user } = useUser();

    return (
        <div className="flex flex-col items-center space-between ps-2 md:ps-5">
            {
                actions.map((action) => {
                    return (
                        <Button tabIndex={-1} variant="link" key={action.id} className="w-full group flex md:pe-0 hover:no-underline">
                            <Link 
                                href={typeof action.link !== "string" ? action.link(user.id) : action.link} 
                                className={cn(
                                    "flex justify-center md:justify-start gap-x-2 w-full group-hover:text-orange-400 grow hover:no-underline items-center text-base text-slate-400",
                                    poppins.className
                                )}
                            >
                                {action.icon}
                                {action.display}
                            </Link>
                            <div className="hidden group-hover:block rounded-l-sm bg-orange-400 w-1 h-full"></div>
                        </Button>
                    );
                })
            }
        </div>
    );
}
