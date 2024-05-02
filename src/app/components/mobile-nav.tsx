import { NavPage } from "./nav-items";
import Link from "next/link";

export const MobileNavigation = ({ pages }: { pages: NavPage[] }) => {
    return (
        <nav className="md:hidden flex-grow h-full justify-center items-center absolute z-[9999]">
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
