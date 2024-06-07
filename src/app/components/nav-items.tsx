import { GiCardPickup } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { FaKaaba } from "react-icons/fa6";
import { GoInfo } from "react-icons/go";

export interface NavPage {
    id: string,
    link: string,
    display: string,
    icon: React.ReactNode,
}

const styles = "size-6"

export const pages: NavPage[] = [
    {
        id: "home",
        link: "/",
        display: "Acceuil",
        icon: <GoHome className={styles} />,
    },
    {
        id: "drawing",
        link: "/drawing/haaj",
        display: "Tirage",
        icon: <GiCardPickup className={styles} />,
    },
    {
        id: "hajj",
        link: "/inscription",
        display: "Inscription",
        icon: <FaKaaba className={styles} />,
    },
    {
        id: "about",
        link: "/about",
        display: "A propos",
        icon: <GoInfo className={styles} />,
    }
]
