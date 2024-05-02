import { icons } from "@/constants/icons";
import { DesktopSide } from "./desktop-side";
import { MobileSide } from "./mobile-side";
import { TbProgressCheck } from "react-icons/tb";
import { cn } from "@/lib/utils";

export interface Tab {
    id: string;
    display: string;
    icon: ((className?: string) => React.ReactNode);
    link: string;
}

const styles = "size-5 group-hover:text-orange-300"
export const tabs: Tab[] = [
    {
        id: "profile",
        display: "Détails de compte",
        icon: (className?: string) => icons.user(cn(styles, className)),
        link: "/profile/haaj"
    },
    {
        id: "state",
        display: "Etat d'inscription",
        icon: (className?: string) => <TbProgressCheck className={cn(styles, className)} />,
        link: "/profile/haaj/status"
    },
]

export const SideBar = () => {
    return (
        <>
            <DesktopSide />
            <MobileSide />
        </>
    );
}
