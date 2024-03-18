"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { slideInRightExitLeft } from "@/constants/animations";

// fonts
import { Rokkitt } from "next/font/google";
import Link from "next/link";
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
})

export default function ResetSuccessPage() {
    return (
        <>
            <motion.div
                key="reset-sucess-header"
                {...slideInRightExitLeft}
                className="flex flex-col items-center justify-center"
            >
                <p className={cn(
                    "text-3xl lg:text-4xl font-bold max-w-[20ch] text-center mb-2 lg:mb-4",
                    rokkitt.className,
                )}>
                    {"Réinitialisation effectuée avec succès"}
                </p>
                <p className="text-gray-500 flex flex-col justify-center items-center mb-2 lg:mb-5 text-center">
                    {"Cliquez ci-dessous pour vous connecter"}
                </p>
                <Link href="/login" className="w-full lg:w-96">
                    <Button className="bg-black hover:bg-black/70 font-bold rounded-full w-full">
                        {"Se connecter"}
                    </Button>
                </Link>
            </motion.div>
        </>
    );
}
