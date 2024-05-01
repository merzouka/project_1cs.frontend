import { GiCardPickup } from "react-icons/gi";
import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";

const styles = "text-black group-hover:text-orange-400"
const tabs: Tab[] = [
    {
        icon: <GiCardPickup className={styles}/>,
        display: "Tirage au sort",
        id: "drawing-settings",
        link: "/drawing/settings",
    }
]

export const DrawingNavBar = () => {
    return (
        <NavBar tabs={tabs} profileLink="/profile/drawing-manager" />
    );
}
