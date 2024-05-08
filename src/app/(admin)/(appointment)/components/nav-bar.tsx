"use client";
import { cn } from "@/lib/utils";
import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";
import { Stethoscope } from "lucide-react";

const styles = "text-black group-hover:text-orange-500 size-4"
const tabs: Tab[] = [
    {
        icon: (className) => <Stethoscope className={cn(styles, className)}/>,
        display: "Visite médicale",
        id: "appointment",
        link: "/appointment",
    }
]

export const DoctorNavBar = () => {
    return (
        <NavBar tabs={tabs} profileLink="/profile/doctor" />
    );
}
