import Link from "next/link";

interface Page {
    id: string,
    link: string,
    display: string
}

const pages: Page[] = [
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
        <nav className="hidden md:flex flex-grow h-full justify-center items-center">
            <ul className="flex items-center justify-center gap-x-5">
                {
                    pages.map((page) => (
                        <li key={page.id} className="font-semibold text-gray-600 hover:text-orange-400">
                            <Link href={page.link}>{page.display}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
