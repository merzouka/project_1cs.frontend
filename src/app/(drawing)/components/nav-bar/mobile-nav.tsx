import { NavTabs } from "./nav-tabs";
import { Actions } from "./actions";
import { Toggle } from "@/components/ui/toggle";
import Logo from "@/components/ui/logo";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animation = isMenuOpen ? { x: 0, display: "flex" } : { x: "-100%", display: "hidden" };
    return (
        <>
            <Toggle className="size-17 p-3 block md:hidden absolute top-2 left-3 z-[11] rounded-full size-16 md:top-4 md:left-5" onPressedChange={(pressed) => setIsMenuOpen(pressed)}>
                <Logo size={"xs"}/>
            </Toggle>
            <motion.nav
                className={cn(
                    "absolute lg:static z-[10] h-dvh top-0 w-full lg:w-80 items-center flex md:hidden",
                    "flex-col justify-between pt-24 pb-2 md:pb-8 bg-white"
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
        </>
    );
}
