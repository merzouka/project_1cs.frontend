"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import Link from "next/link";
import { useState } from "react";
import { icons } from "@/constants/icons";
import { Pages } from "@/constants/pages";

export const EmailVerification = () => {
    const { user, validateAccess } = useUser();
    const { isLoading } = validateAccess(Pages.open);
    const [closed, setClosed] = useState(false);
    return (
        <>
            {
                !isLoading && !closed && !user.emailVerified && 
                    <div className="flex justify-between items-center bg-black
                        md:absolute md:-top-2 md:left-1/2 md:-translate-x-1/2 
                        text-white px-3 md:rounded-b-2xl w-full md:w-fit py-2 md:py-0">
                        <div className="md:flex md:flex-row md:items-center md:justify-center">
                            <p className="text-sm text-center inline md:block">
                                {"Votre adresse e-mail n'est pas encore vérifiée."}
                            </p>
                            <Button variant={"link"} className="pr-1 p-0 pl-1 h-6 md:h-10 md:px-4 md:py-2 inline md:block">
                                <Link href="/verify-email" className="text-white">
                                    {"Vérifiez votre adresse e-mail."}
                                </Link>
                            </Button>
                        </div>
                        <Button size={"icon"} onClick={() => setClosed(true)} className="bg-transparent hover:bg-tranparent p-0">
                            {icons.close("text-white hover:text-orange-400 size-5")}
                        </Button>
                    </div>
            }
        </>    
    );
}
