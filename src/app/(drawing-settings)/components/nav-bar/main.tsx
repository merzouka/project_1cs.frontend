"use client";
import { Toggle } from "@/components/ui/toggle";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ProfileActions } from "./profile-actions";
import { UserPopup } from "./user-popup";

export const NavBar = () => {
    const isMobile = useMediaQuery("(max-width: 36rem)")
    const logo = <Logo size={isMobile ? "xs" : "small"}/>
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animation = isMenuOpen ? { x: 0, display: "block" } : { x: "-100%", display: "hidden" };

    return (
        <>
            <div className="absolute top-2 left-3 z-[1001] bg-white size-16 md:top-4 md:left-5"></div>
                {
                    /* !isMobile ?
                        <Button className="rounded-full size-18 p-1" variant="link">
                            <Link href="/" className="w-full h-full">
                                {logo}
                            </Link>
                        </Button> :
                        <Toggle className="rounded-full size-17 p-3" onPressedChange={(pressed) => setIsMenuOpen(pressed)}>
                            {logo}
                        </Toggle> */
                }
            
            <div className="absolute top-3 right-2 lg:top-8 lg:right-7 size-12 bg-black md:w-fit md:min-w-20">
            </div>
            <AnimatePresence>
                <motion.nav
                    className={cn(
                        "absolute lg:static z-[1000] h-dvh top-0 w-full lg:w-80 flex flex-col justify-around items-center bg-black",
                    )}
                    initial={!isMobile ? {} : {x: "-100%"}}
                    animate={!isMobile ? {} : animation}
                >
                    <div className="w-9/12"></div>
                </motion.nav>
            </AnimatePresence>
        </>
    );
}

