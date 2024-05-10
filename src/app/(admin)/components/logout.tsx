"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { IoExitOutline } from "react-icons/io5";

export const Logout = ({className} : { className?: string }) => {
    const [loggingOut, setLoggingOut] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const { isLoading } = useQuery({
        queryKey: ["logout"],
        queryFn: async () => {
            try {
                const response = await axios.post(getUrl(endpoints.logout), {}, {
                    xsrfCookieName: "csrftoken",
                    xsrfHeaderName: "X-CSRFToken",
                    withXSRFToken: true,
                });
                router.push("/login");
                return response
            } catch (error) {
                toast({
                    title: "La déconnexion a échoué",
                    variant: "destructive"
                });
                throw new Error("logout error");
            }
        },
        enabled: loggingOut,
        retry: false,
    });

    function handleClick() {
        setLoggingOut(true);
    }

    return (
        <>
            <Button 
                size={"sm"}
                className={cn(
                    "flex gap-x-2 group",
                    "bg-transparent hover:bg-transparent hover:text-orange-300 w-full",
                    className,
                )}
                disabled={isLoading}
                onClick={handleClick}
            >
                <IoExitOutline />
                <span>{"Déconnexion"}</span>
            </Button>
        </>
    );
}
