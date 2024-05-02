import { DesktopNavigation } from "./desktop-nav";

export interface NavPage {
    id: string,
    link: string,
    display: string
}

const pages: NavPage[] = [
    {
        id: "home",
        link: "/",
        display: "Acceuil",
    },
    {
        id: "drawing",
        link: "/drawing",
        display: "Tirage",
    },
    {
        id: "hajj",
        link: "/",
        display: "Hajj",
    },
    {
        id: "about",
        link: "/about",
        display: "A propos",
    }
]

export const NavItems = () => {
    return (
        <DesktopNavigation pages={pages}/>
    );
}
