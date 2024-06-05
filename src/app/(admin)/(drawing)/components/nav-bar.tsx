"use client";
import { cn } from "@/lib/utils";
import { GiCardPickup } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";
import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";

const styles = "text-black group-hover:text-orange-500";
const tabs: Tab[] = [
  {
    icon: (className) => <LuSettings2 className={cn(styles, className)} />,
    display: "Paramètres du tirage",
    id: "drawing-settings",
    link: "/drawing/settings",
  },
  {
    icon: (className) => <GiCardPickup className={cn(styles, className)} />,
    display: "Tirage au sort",
    id: "drawing",
    link: "/drawing",
  },
];

export const DrawingNavBar = () => {
  return <NavBar tabs={tabs} profileLink="/profile/drawing-manager" />;
};
