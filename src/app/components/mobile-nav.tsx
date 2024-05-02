"use client";
import Logo from "@/components/ui/logo";
import { pages } from "./nav-items";
import Link from "next/link";
import { UserActions } from "./user-actions";
import { motion } from "framer-motion";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const animate = isOpen ? { x: 0 } : { x: "-100%" };

    return (
        <>
            <div className="flex md:hidden justify-between items-center relative z-[9999] p-2">
                <Toggle onPressedChange={() => setIsOpen(!isOpen)} className="rounded-full size-16">
                    <Logo size="xs"/>
                </Toggle>
                <UserActions />
            </div>
            <motion.nav 
                className="md:hidden min-h-dvh justify-center items-center absolute z-[9998] bg-white w-full mt-14"
                animate={animate}
            >
                <ul className="flex flex-col p-3 items-center gap-x-5">
                    {
                        pages.map((page) => (
                            <li key={page.id} className="font-semibold text-gray-600 hover:text-orange-400 w-full">
                                <Link href={page.link} 
                                    className="flex justify-between items-center w-full p-2 
                                    border-b-2 border-b-transparent transition-all hover:transition-all
                                    hover:border-b-orange-400 hover:text-orange-400"
                                >
                                    <span className="text-3xl">{page.display}</span>
                                    {page.icon}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </motion.nav>
        </>
    );
}
