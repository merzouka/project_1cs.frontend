"use client";
import { cn } from "@/lib/utils";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaKaaba } from "react-icons/fa6";
import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";
import { icons } from "@/constants/icons";


const styles = "text-black group-hover:text-orange-500"
const tabs: Tab[] = [
    {
        icon: (className) => <MdOutlineAssignmentInd className={cn(styles, className)} />,
        display: "Roles",
        id: "roles",
        link: "/roles",
    },
    {
        icon: (className) => icons.flight(cn(styles, className)),
        display: "Vols et hotels",
        id: "bookings",
        link: "/bookings/vols",
    },
    {
        icon: (className) => <FaKaaba className={cn(styles, className)} />,
        display: "Les pèlerins",
        id: "hodjadj",
        link: "/hodjadj",
    },
]

export const AdminNavBar = () => {
    return (

        <NavBar tabs={tabs} profileLink="/profile/admin" />
    );
}
