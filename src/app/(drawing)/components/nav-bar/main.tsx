"use client";
import { Toggle } from "@/components/ui/toggle";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { UserPopup } from "./user-popup";
import { NavTabs } from "./nav-tabs";
import { Actions } from "./actions";

export const NavBar = () => {
    const isMobile = useMediaQuery("(max-width: 36rem)")
    const logo = <Logo size={isMobile ? "xs" : "small"}/>
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animation = isMenuOpen ? { x: 0, display: "flex" } : { x: "-100%", display: "hidden" };

    return (
        <div className="size-full">
            <div className="absolute top-2 left-3 z-[1001] rounded-full size-16 md:top-4 md:left-5">
                <Toggle disabled={!isMobile} className="disabled:opacity-100 rounded-full size-17 p-3" onPressedChange={(pressed) => setIsMenuOpen(pressed)}>
                    {logo}
                </Toggle>
            </div>
            
            <div className="absolute top-3 right-2 lg:top-8 lg:right-7 md:w-fit  z-[1001]">
                <UserPopup />
            </div>
            <AnimatePresence>
                <motion.nav
                    className={cn(
                        "absolute lg:static z-[1000] h-dvh top-0 w-full lg:w-80 items-center",
                        "flex flex-col justify-between pt-24 pb-2 md:pb-8 bg-white"
                    )}
                    initial={{x: "-100%"}}
                    animate={animation}
                >
                    <div className="w-full">
                        <NavTabs />
                    </div>
                    <div className="w-full">
                        <Actions />
                    </div>
                </motion.nav>
            </AnimatePresence>
        </div>
    );
}

