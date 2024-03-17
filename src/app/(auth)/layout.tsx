"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// hooks
import { usePathname } from "next/navigation";

// components
import SideBanner from "./components/side-banner";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

// icons
import { FaArrowLeft } from "react-icons/fa";
import { useMultiStepRegister } from "./hooks/use-mutli-step-register";
import BottomMessage from "./components/bottom-message";
import { cn } from "@/lib/utils";

function getActiveStep(step: number, ...steps: React.ReactNode[]) {
    return steps[step];
}

export default function AuthLayout({
    login, step1, step2, step3, step4, step5, step6
    }: {
        login: React.ReactNode,
        step1: React.ReactNode,
        step2: React.ReactNode,
        step3: React.ReactNode
        step4: React.ReactNode,
        step5: React.ReactNode,
        step6: React.ReactNode,
    }) {
    const pathname = usePathname();
    const registerSteps = 6 
    const { step, previous } = useMultiStepRegister(registerSteps);

    const animation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        // exit: {
        //     opacity: 0,
        // },
        transition: {
            duration: 0.5,
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center | 
            p-1 lg:p-3 h-dvh">
            <AnimatePresence custom="wait" initial={false}>
                <LayoutGroup>
                    <motion.div
                        key="side banner"
                        {...animation}
                        className={cn(
                            "w-full h-full flex justify-center align-center col-span-1 row-start-1 row-span-1",
                        )}
                        style={{gridColumn: pathname.includes("login") ? "1 / 2" : "2 / 3"}}
                        transition={{ duration: 0.2 }}
                        layout
                    >
                        <SideBanner />
                    </motion.div>
                    {
                        pathname.includes("login") ?
                            <motion.main 
                                key="login"
                                {...animation}
                                className="flex flex-col justify-center items-center w-full lg:w-fit h-full relative col-start-2 col-span-1 row-start-1 row-span-1"
                            >
                                <Logo />
                                <div aria-hidden className="flex-grow-[1]"></div>
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    {login}
                                </div>
                                <div aria-hidden className="grow-[2]"></div>
                            </motion.main>
                            :
                            <motion.main 
                                key="register"
                                {...animation}
                                className="flex flex-col justify-center items-center w-full lg:w-fit h-full relative col-start-1 col-span-1 row-start-1 row-span-1"
                            >
                                <AnimatePresence custom="wait" initial={false}>
                                    {
                                        (!pathname.includes("login") && step > 3) &&
                                            <motion.div
                                                key="register back button"
                                                {...animation}
                                            >
                                                <Button 
                                                    className="
                                                    absolute top-0 md:top-3 left-0
                                                    focus-visible:ring focus-visible:ring-slate-900 
                                                    focus-visible:ring-offset-2 focus-visible::ring-offset-black
                                                    rounded-full p-3 w-10 h-10 lg:w-15 lg:h-15 
                                                    bg-transparent hover:bg-white hover:shadow-md" 
                                                    onClick={() => previous()} 
                                                >
                                                    <FaArrowLeft className="text-black w-12 h-12"/>
                                                </Button>
                                            </motion.div>
                                    }
                                </AnimatePresence>
                                <Logo />
                                <div aria-hidden className="flex-grow-[1]"></div>
                                <div className="w-full h-full flex flex-col justify-center items-center px-4 lg:px-0">
                                    <AnimatePresence custom="wait" initial={false}>
                                        {getActiveStep(
                                            step,
                                            step1,
                                            step2,
                                            step3,
                                            step4,
                                            step5,
                                            step6
                                        )}
                                    </AnimatePresence>
                                    <div className="grow max-h-12"></div>
                                    <BottomMessage 
                                        prompt="Vous avez déja un compte?"
                                        link="/login"
                                        action="Connectez-vous"
                                    />
                                </div>
                                <div aria-hidden className="grow-[2]"></div>
                            </motion.main>
                    }

                </LayoutGroup>
            </AnimatePresence>
        </div>
    );
}
