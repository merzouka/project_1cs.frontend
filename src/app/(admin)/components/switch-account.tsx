"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { MdSwitchAccount } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "@/config/axios";

export const SwitchAccount = ({className} : { className?: string }) => {
    const { toast } = useToast();
    const router = useRouter();
    const { isPending: isLoggingOut, mutate } = useMutation({
        mutationFn: async () => {
            const response = await AxiosInstance.post(getUrl(endpoints.logout), {}, {
                xsrfCookieName: "csrftoken",
                xsrfHeaderName: "X-CSRFToken",
                withXSRFToken: true,
            });
            return response;
        },
        onSuccess: () => {
            Cookies.remove("sessionid");
            router.push("/login");
        },
        onError: () => {
            toast({
                title: "La déconnexion a échoué",
                variant: "destructive"
            });
        },
    });

    function handleClick() {
        mutate();
    }

    return (
        <>
            <Button 
                className={cn(
                    "flex gap-x-2 group",
                    "bg-transparent hover:bg-transparent hover:text-orange-300 w-full",
                    className,
                )}
                disabled={isLoggingOut}
                onClick={handleClick}
                size="sm"
            >

                <MdSwitchAccount/>
                <span>{"Change de compte"}</span>
            </Button>
        </>
    );
}
