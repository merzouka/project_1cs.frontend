"use client";
import { slideInRightExitLeft } from "@/constants/animations";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BsPatchCheck } from "react-icons/bs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useUser } from "@/hooks/use-user";
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";

export default function Step() {
    const { profile } = useUser();

    const { setStep } = useMultiStep(MultiStepKeys.verifyEmail);
    return (
        <motion.div 
            key="email-verified-main"
            {...slideInRightExitLeft}
        >
            <div className="flex flex-col items-center justify-between">
                <BsPatchCheck className="text-slate-800 mb-8 border border-slate-200 rounded-full p-3 w-12 h-12" />
                <p className="font-bold text-3xl mb-6">Email validé</p>
                <p className="text-gray-500 max-w-[50ch] mb-10 text-center">
                    {"Votre adresse e-mail a été validé avec succés. Cliquez ci-dessous pour continuer."}
                </p>
                <Button tabIndex={-1} className={cn(
                        "rounded-full bg-black hover:bg-black/70 font-bold w-full max-w-80",
                    )}
                >
                    <Link href={profile}
                        onClick={() => {
                            setStep(0);
                        }}
                    >
                        {"Continuer"}
                    </Link>
                </Button>
            </div>
        </motion.div>
    );
}
