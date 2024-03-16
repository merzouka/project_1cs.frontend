"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SideBanner from "./components/side-banner";
import Logo from "@/components/ui/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center | 
            p-1 lg:p-3 h-dvh">
            <AnimatePresence custom="wait" initial={false}>
                {
                    pathname === "/login" &&
                        <motion.div
                            key="login-side-banner"
                            initial={{x: -500}}
                            animate={{x: 0}}
                            exit={{x: -500}}
                            className="w-full h-full flex justify-center align-center"
                        >
                            <SideBanner />
                        </motion.div>
                }
                <motion.div
                    key="login"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="w-full h-full flex justify-center align-center"
                >
                    <main className="flex flex-col justify-center items-center w-full h-full md:relative">
                        <Logo className="md:absolute top-1 lg:top-2 inset-x-auto" />
                        {children}
                    </main>
                </motion.div>
                {
                    pathname === "/register" &&
                        <motion.div
                            key="register-side-banner"
                            initial={{x: -500}}
                            animate={{x: 0}}
                            exit={{x: -500}}
                            className="w-full h-full flex justify-center align-center"
                        >
                            <SideBanner />
                        </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}
