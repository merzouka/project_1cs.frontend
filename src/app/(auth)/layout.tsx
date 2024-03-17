"use client";

import { motion, AnimatePresence } from "framer-motion";
// hooks
import { useSelectedLayoutSegment } from "next/navigation";

// components
import SideBanner from "./components/side-banner";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

// icons
import { FaArrowLeft } from "react-icons/fa";
import { useMultiStepRegister } from "./hooks/use-mutli-step-register";
import BottomMessage from "./components/bottom-message";

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
    const loginSegment = useSelectedLayoutSegment("login");
    const registerSteps = 6 
    const { step, previous } = useMultiStepRegister(registerSteps);
    console.log(loginSegment);

    return (
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center | 
                p-1 lg:p-3 h-dvh">
                <AnimatePresence custom="wait" initial={false}>
                    {
                        loginSegment === "children" &&
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
                    <main className="flex flex-col justify-center items-center w-full lg:w-fit h-full relative">
                        <Logo className="" />
                        <div aria-hidden className="flex-grow-[1]"></div>
                        <AnimatePresence custom="wait" initial={false}>
                            {
                                step > 3 &&
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
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
                            {
                                loginSegment === "children" ?
                                    <motion.div
                                        key="login"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className="w-full h-full flex flex-col justify-center items-center"
                                    >
                                        {login}
                                    </motion.div>
                                    :
                                    <motion.div
                                        key="register"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className="w-full h-full flex flex-col justify-center items-center px-4 lg:px-0"
                                    >
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
                                    </motion.div>
                            }
                        </AnimatePresence>
                        <div aria-hidden className="grow-[2]"></div>
                    </main>
                    {
                        loginSegment !== "children" &&
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
