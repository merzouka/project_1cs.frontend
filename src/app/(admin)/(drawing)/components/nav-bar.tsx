import { GiCardPickup } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";
import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";

const styles = "text-black group-hover:text-orange-400"
const tabs: Tab[] = [
    {
        icon: <LuSettings2 className={styles} />,
        display: "Paramètres du tirage",
        id: "drawing-settings",
        link: "/drawing/settings",
    },
    {
        icon: <GiCardPickup className={styles}/>,
        display: "Tirage au sort",
        id: "drawing",
        link: "/drawing",
    },
]

export const DrawingNavBar = () => {
    return (
        <NavBar tabs={tabs} profileLink="/profile/drawing-manager" />
    );
}
