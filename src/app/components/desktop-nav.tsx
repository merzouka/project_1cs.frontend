import { NavPage } from "./nav-items";
import Link from "next/link";

export const DesktopNavigation = ({ pages }: { pages: NavPage[] }) => {
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
