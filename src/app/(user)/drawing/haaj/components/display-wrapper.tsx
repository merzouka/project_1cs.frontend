"use client";
import { DrawingDisplay } from "@/app/(admin)/(drawing)/components/drawing-display";
import { useEffect, useRef, useState } from "react";
import { displayLoadingTime } from "@/app/(admin)/(drawing)/components/winner-diplay";
import { useUser } from "@/hooks/use-user";
import { Role } from "@/stores/user-store";
import { Toaster } from "@/components/ui/toaster";
import { Spinner } from "@/components/custom/spinner";
import { Pages } from "@/constants/pages";
import { ErrorDisplay } from "@/app/components/error-display";
import { useInterval } from "usehooks-ts";

export const DisplayWrapper = () => {
    const { useValidateAccess: validateAccess, user } = useUser();
    const { isLoading } = validateAccess(Pages.open);
    const [displayed, setDisplayed] = useState(0);
    const [closeModal, setCloseModal] = useState(false);
    const timeout = useRef<NodeJS.Timeout | undefined>(undefined);
    const [end, setEnd] = useState(false);

    useInterval(() => {
            setDisplayed((current) => current + 1);
            setCloseModal(false);
            timeout.current = setTimeout(() => {
                setCloseModal(true);
            }, displayLoadingTime + 3 * 1000);
        }, !end? displayLoadingTime + 4 * 1000 : null,
    );

    return (
        <>
            {
                isLoading ?
                    <div className="w-full h-full items-center justify-center flex">
                        <Spinner text={"show"} direction={"col"} size={"xl"} className="text-slate-400"/>
                    </div>
                    :
                    user.isLoggedIn && user.role == Role.haaj ?
                        <DrawingDisplay displayed={displayed} closeModal={closeModal} setEnd={setEnd}
                            onModalClose={() => clearTimeout(timeout.current)} />:
                        <ErrorDisplay />
            }
            <Toaster />
        </>
    );
}
