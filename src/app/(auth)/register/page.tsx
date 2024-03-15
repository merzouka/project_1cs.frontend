"use client";

import Logo from "@/components/ui/logo";
import SideBanner from "@/app/(auth)/components/side-banner";
import { cn } from "@/lib/utils";

import { Rokkitt } from "next/font/google";

import Forms from "./components/forms";
import { useMutliStep } from "@/hooks/ui";
import BottomMessage from "../components/bottom-message";
import { AnimatePresence, motion } from "framer-motion";

const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

export default function RegisterPage() {
    const { step, next, previous } = useMutliStep(4);

    return (
        <div className="
            grid grid-cols-1 md:grid-cols-2 place-items-center |
            min-h-dvh |
            p-1 md:p-3
            ">
            <div className="
                flex justify-center items-center
                h-full w-full
                ">
                <div className="flex flex-col items-center justify-center h-full">
                    <Logo />
                    <div className="flex-grow max-h-12"></div>
                    <AnimatePresence custom="wait" initial={false}>
                        {
                            step === 0 || step === 1 ?
                                <motion.p className={cn(
                                    "text-3xl font-bold",
                                    rokkitt.className
                                )}
                                    key="create-account-header"
                                    initial={{opacity: 0, x: -200}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -200}}
                                >
                                    {"Créer un compte"}
                                </motion.p>:
                                <motion.p className={cn(
                                    "text-3xl font-bold",
                                    rokkitt.className
                                )}
                                    key="info-header"
                                    initial={{opacity: 0, x: 200}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -200}}
                                >
                                    {"Vos informations"}
                                </motion.p>
                        }
                        {
                            step === 2 &&
                                <motion.p 
                                    key="information"
                                    className="text-gray-400 max-w-[38ch] text-center text-sm"
                                    initial={{opacity: 0, x: 200}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -200}}
                                >
                                    Entrez les détails nécessaires pour continuer.
                                </motion.p>
                        }
                    </AnimatePresence>
                    <div className="flex-grow max-h-10"></div>
                    <AnimatePresence custom="wait" initial={false}>
                        <Forms index={step} next={next} previous={previous} />
                    </AnimatePresence>
                    <div className="flex-grow max-h-12"></div>
                    <BottomMessage 
                        prompt="Vous avez déja un compte?"
                        action="Connectez-vous"
                    />
                    <div className="flex-grow max-h-8"></div>
                </div>
            </div>
            <SideBanner />
        </div>
    );
}
