"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { IoExitOutline } from "react-icons/io5";
import { AxiosInstance } from "@/config/axios";
import { useUserStore } from "@/stores/user-store";

export const Logout = ({className} : { className?: string }) => {
    const { toast } = useToast();
    const emptyUser = useUserStore((state) => state.emptyUser);
    const router = useRouter();
    const pathname = usePathname();
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
            emptyUser();
            if (pathname == "/") {
                router.push("/");
                return;
            }
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
                size={"icon"}
                className={cn(
                    "flex gap-x-2 group",
                    "bg-transparent hover:bg-tranparent rounded-full size-10",
                    className,
                )}
                disabled={isLoggingOut}
                onClick={handleClick}
            >
                <IoExitOutline className="size-8 text-black hover:text-orange-400" />
            </Button>
        </>
    );
}
