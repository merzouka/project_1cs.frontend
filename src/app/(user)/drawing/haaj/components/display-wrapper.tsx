"use client";
import { DrawingDisplay } from "@/app/(admin)/(drawing)/components/drawing-display";
import { useEffect, useRef, useState } from "react";
import { displayLoadingTime } from "@/app/(admin)/(drawing)/components/winner-diplay";
import { useUser } from "@/hooks/use-user";
import { Role } from "@/stores/user-store";
import { icons } from "@/constants/icons";
import { Toaster } from "@/components/ui/toaster";
import { Spinner } from "@/components/custom/spinner";
import { Pages } from "@/constants/pages";

export const DisplayWrapper = () => {
    const { useValidateAccess: validateAccess, user } = useUser();
    const { isLoading } = validateAccess(Pages.open);
    const [displayed, setDisplayed] = useState(0);
    const [closeModal, setCloseModal] = useState(false);
    const timeout = useRef<NodeJS.Timeout | undefined>(undefined);
    const interval = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        interval.current = setInterval(() => {
            setDisplayed((current) => current + 1);
            setCloseModal(false);
            timeout.current = setTimeout(() => {
                setCloseModal(true);
            }, displayLoadingTime + 3 * 1000);
        }, displayLoadingTime + 4 * 1000);
        return () => {
            clearInterval(interval.current)
            clearTimeout(timeout.current);
        }
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div className="w-full h-full items-center justify-center flex">
                        <Spinner text={"show"} direction={"col"} size={"xl"} className="text-slate-400"/>
                    </div>
                    :
                    user.isLoggedIn && user.role == Role.haaj ?
                        <DrawingDisplay displayed={displayed} closeModal={closeModal} setEnd={(_) => {
                            clearInterval(interval.current)
                        }} onModalClose={() => clearTimeout(timeout.current)} />:
                        <div className="w-full h-full items-center justify-center flex">
                            <div className="flex flex-col items-center justify-center md:gap-y-5 gap-y-2 -translate-y-1/2">
                                {icons.caution("size-32 text-slate-400")}
                                <span className="text-slate-400 text-2xl font-bold text-center text-wrap">
                                    {"Seuls les haajs peuvent voir le tirage."}
                                </span>
                            </div>
                        </div>
            }
            <Toaster />
        </>
    );
}
