import { Role, getRole, useUserStore } from "@/stores/user-store"
import { useRouter } from "next/navigation";
import { Pages } from "@/constants/pages";
import { pageValidators } from "@/constants/page-validators";
import { useQuery } from "@tanstack/react-query";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { useEffect } from "react";
import { getCityNameId } from "@/constants/cities";

function getProfile(role: Role) {
    switch (role) {
        case Role.haaj:
            return "/profile/haaj";
        case Role.drawingManager:
            return "/profile/drawing-manager";
        case Role.doctor:
            return "/profile/doctor"
        case Role.user:
            return "/profile";
        case Role.paymentManager:
            return "/profile/payment-manager";
        case Role.admin:
            return "/profile/admin";
        default:
            return "/";
    }
}

export function useUser() {
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);
    const isLoggedIn = user.isLoggedIn;
    const role = user.role;
    function hasRole(toCheck: Role): boolean {
        return role == toCheck;
    }

    const router = useRouter();
    const { toast } = useToast();
    function useValidateAccess(page: Pages) {
        const { isLoading, isError, data, failureCount } = useQuery({
            staleTime: Infinity,
            queryKey: ["profile"],
            queryFn: async () => {
                try {
                    const response = await AxiosInstance.get(getUrl(endpoints.currentUser));
                    const data = response.data;
                    return data;
                } catch (error) {
                    if (failureCount < 3) {
                        throw new Error("fetch fail");
                    }
                    throw new Error("connection error");
                }
            }
        });
        useEffect(() => {
            try {
                if (isError) {
                    if (page != Pages.open) {
                        router.replace("/login");
                    }
                    return;
                }
                if (data) {
                    const loggedInUser = {
                        id: data.id,
                        role: data.role,
                        email: data.email,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        dateOfBirth: new Date(data.dateOfBirth),
                        phone: data.phone,
                        province: data.province,
                        city: getCityNameId(data.city),
                        gender: data.gender == "M" ? "male" : "female",
                        image: data?.personal_picture || undefined,
                        emailVerified: data?.is_email_verified || false,
                        isLoggedIn: true,
                    };

                    /* @ts-ignore impossible invalid values */
                    setUser(loggedInUser);
                    /* @ts-ignore cannot get out of range */
                    if (!pageValidators[page]({...loggedInUser, role: getRole(loggedInUser.role)})) {
                        if (!page.includes("profile")) {
                            router.replace(`/login?return=${page}`);
                        } else {
                            router.replace("/login");
                        }
                    }
                }
            } catch (error) {
                toast({
                    description: "Erreur interne de serveur.",
                    variant: "destructive",
                });
            }
            
        }, [data, isError]);

        return {
            isLoading,
            isError,
            data,
        };
    }

    return {
        user,
        isLoggedIn,
        role,
        hasRole,
        useValidateAccess,
        profile: getProfile(role),
    }
}
