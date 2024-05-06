import { pages } from "./nav-items";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { UserActions } from "./user-actions";
import { cn } from "@/lib/utils";

export const DesktopNav = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            "hidden md:flex justify-around items-center w-full py-3 px-12 h-[5.5rem] relative mb-2 bg-white flex-shrink-0",
            className
        )}>
            <Logo size="small" className="hidden md:block absolute top-1 left-10"/>
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
            <UserActions />
        </div>
    );
}
