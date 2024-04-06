import { NavTabs } from "./nav-tabs";
import { Actions } from "./actions";
import Logo from "@/components/ui/logo";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DesktopNav = () => {
    return (
        <>
            <div className="size-16 p-3 hidden md:block absolute top-2 left-3 z-[11] rounded-full md:top-4 md:left-5">
                <Logo size={"small"}/>
            </div>
            <motion.nav
                className={cn(
                    "absolute lg:static z-[10] h-dvh top-0 w-full lg:w-80 items-center hidden md:flex",
                    "flex-col justify-between pt-24 pb-2 md:pb-8 bg-white"
                )}
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
