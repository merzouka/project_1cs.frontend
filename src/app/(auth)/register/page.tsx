"use client";
import Link from "next/link";

import Logo from "@/app/(auth)/components/logo";
import SideBanner from "@/app/(auth)/components/side-banner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Rokkitt } from "next/font/google";

import Forms from "./components/forms";
import { useMutliStep } from "@/hooks/ui";

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
                <div className="flex flex-col justify-center items-center h-full">
                    <Logo />
                    <div aria-hidden className="flex-grow min-h-0 max-h-12"></div>
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <p className={cn(
                            "text-3xl font-bold",
                            rokkitt.className
                        )}>
                            {
                                step === 0 || step === 1 ?  "Créer un compte": "Vos informations"
                            }
                        </p>
                        {
                            step === 2 &&
                                <p className="text-gray-400 max-w-[38ch] text-center text-sm">
                                    Entrez les détails nécessaires pour continuer.
                                </p>
                        }
                    </div>
                    <div aria-hidden className="flex-grow min-h-0 max-h-10"></div>
                    {
                        <Forms index={step} next={next} previous={previous} />
                    }

                    <div aria-hidden className="flex-grow min-h-0 max-h-12"></div>
                    <p className="text-xs">
                        Vous avez d&eacute;ja un compte?
                        <Button variant="link"  className="font-bold text-black text-base">
                            <Link className="text-xs" href="/login">Connectez-vous</Link>
                        </Button>
                    </p>
                    <div aria-hidden className="flex-grow min-h-0 max-h-8"></div>
                </div>
            </div>
            <SideBanner />
        </div>
    );
}
