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
import { MultiStepKeys, useMultiStep } from "./hooks/use-mutli-step-register";
import BottomMessage from "./components/bottom-message";
import { cn } from "@/lib/utils";
import { fade } from "@/constants/animations";
import { Suspense } from "react";

function getActiveStep(step: number, ...steps: React.ReactNode[]) {
    return steps[step];
}

function isLeft(pathname: string) {
    return pathname.includes("login") ||
        pathname.includes("reset-password-email") ||
        pathname.includes("reset-password") ||
        pathname.includes("verify-email");
}

export default function AuthLayout({
    login, 
    accountIdentifiers, accountPassword, accountInfo, accountRegion,
    resetPassword, resetEmail, resetEmailSent, resetSuccess,
    emailVerified, emailVerification,
    }: {
        login: React.ReactNode,
        accountIdentifiers: React.ReactNode,
        accountPassword: React.ReactNode,
        accountInfo: React.ReactNode,
        accountRegion: React.ReactNode,
        resetPassword: React.ReactNode,
        resetEmail: React.ReactNode,
        resetEmailSent: React.ReactNode,
        resetSuccess: React.ReactNode,
        emailVerified: React.ReactNode,
        emailVerification: React.ReactNode,
    }) {
    const pathname = usePathname();
    const registerSteps = 4;
    const { step: registerStep, previous, setMax: setRegisterMax } = useMultiStep(MultiStepKeys.register);
    setRegisterMax(registerSteps);

    const resetEmailSteps = 2
    const { step: resetEmailStep, setMax: setResetEmailMax } = useMultiStep(MultiStepKeys.resetEmail);
    setResetEmailMax(resetEmailSteps);

    const resetPasswordSteps = 2
    const { step: resetPasswordStep, setMax: setResetPasswordMax } = useMultiStep(MultiStepKeys.resetPassword);
    setResetPasswordMax(resetPasswordSteps);

    const verifyEmailSteps = 2
    const { step: verifyEmailStep, setMax: setVerifyEmailMax } = useMultiStep(MultiStepKeys.resetPassword);
    setVerifyEmailMax(verifyEmailSteps);

    return (
        <Suspense>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center | 
                p-2 lg:p-3 h-dvh">
                <AnimatePresence custom="wait" initial={false}>
                    <LayoutGroup>
                        <motion.div
                            key="side-banner"
                            className={cn(
                                "hidden lg:flex w-full h-full justify-center align-center col-span-1 row-start-1 row-span-1",
                            )}
                            style={{gridColumn: isLeft(pathname) ? "1 / 2" : "2 / 3"}}
                            transition={{ duration: 0.2 }}
                            layout
                        >
                            <SideBanner />
                        </motion.div>
                        {
                            pathname.includes("reset-password-email") &&
                                <motion.main 
                                    key="reset-password-email"
                                    {...fade}
                                    className="flex flex-col justify-center items-center w-full px-4 lg:px-0 h-full relative lg:col-start-2 col-start-1 col-span-1 row-start-1 row-span-1"
                                >
                                    <Logo />
                                    <div aria-hidden className="flex-grow-[1]"></div>
                                    <AnimatePresence custom="wait" initial={false}>
                                        {getActiveStep(
                                            resetEmailStep,
                                            resetEmail,
                                            resetEmailSent,
                                        )}
                                    </AnimatePresence>
                                    <div aria-hidden className="grow-[2]"></div>
                                </motion.main>
                        }
                        {
                            (pathname.includes("reset-password") && !pathname.includes("reset-password-email")) &&
                                <motion.main 
                                    key="reset-password"
                                    {...fade}
                                    className="flex flex-col justify-center items-center w-full px-4 lg:px-0 h-full relative lg:col-start-2 col-start-1 col-span-1 row-start-1 row-span-1"
                                >
                                    <Logo />
                                    <div aria-hidden className="flex-grow-[1]"></div>
                                    <AnimatePresence custom="wait" initial={false}>
                                        {getActiveStep(
                                            resetPasswordStep,
                                            resetPassword,
                                            resetSuccess,
                                        )}
                                    </AnimatePresence>
                                    <div aria-hidden className="grow-[2]"></div>
                                </motion.main>
                        }
                        {
                            pathname.includes("verify-email") &&
                                <motion.main 
                                    key="verify-email"
                                    {...fade}
                                    className="flex flex-col justify-center items-center w-full px-4 lg:px-0 h-full relative lg:col-start-2 col-start-1 col-span-1 row-start-1 row-span-1"
                                >
                                    <Logo />
                                    <div aria-hidden className="flex-grow-[1]"></div>
                                    <AnimatePresence custom="wait" initial={false}>
                                        {getActiveStep(
                                            verifyEmailStep,
                                            emailVerification,
                                            emailVerified,
                                        )}
                                    </AnimatePresence>
                                    <div aria-hidden className="grow-[2]"></div>
                                </motion.main>
                        }
                        {
                            pathname.includes("login") &&
                                <motion.main 
                                    key="login"
                                    {...fade}
                                    className="flex flex-col justify-center items-center w-full lg:w-fit h-full relative lg:col-start-2 col-start-1 col-span-1 row-start-1 row-span-1"
                                >
                                    <Logo />
                                    <div aria-hidden className="flex-grow-[1]"></div>
                                    <div className="w-full h-full flex flex-col justify-center items-center">
                                        {login}
                                    </div>
                                    <div aria-hidden className="grow-[2]"></div>
                                </motion.main>
                        }
                        {
                            pathname.includes("register") &&
                                <motion.main 
                                    key="register"
                                    {...fade}
                                    className="flex flex-col justify-center items-center w-full lg:w-fit h-full relative col-start-1 col-span-1 row-start-1 row-span-1"
                                >
                                    <AnimatePresence custom="wait" initial={false}>
                                        {
                                            registerStep > 0 &&
                                                <motion.div
                                                    key="register-back-button"
                                                    {...fade}
                                                >
                                                    <Button 
                                                        tabIndex={0}
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
                                                registerStep,
                                                accountIdentifiers,
                                                accountPassword,
                                                accountInfo,
                                                accountRegion
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
        </Suspense>
    );
}
