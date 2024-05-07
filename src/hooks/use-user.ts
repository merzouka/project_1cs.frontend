import { Role, getRole, useUserStore } from "@/stores/user-store"
import { useRouter } from "next/navigation";
import { Pages } from "@/constants/pages";
import { pageValidators } from "@/constants/page-validators";
import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { useEffect, useState } from "react";

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
    const [isFetching, setIsFetching] = useState(false);
    function validateAccess(page: Pages) {
        const { isLoading, isError, data, failureCount } = useQuery({
            enabled: isFetching,
            queryKey: ["profile"],
            queryFn: async () => {
                try {
                    setIsFetching(false);
                    const response = await AxiosInstance.get(getUrl(endpoints.currentUser));
                    const data = response.data;
                    console.log(response.data);
                    const loggedInUser = {
                        role: role,
                        email: data.email,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        dateOfBirth: new Date(data.dateOfBirth),
                        phone: data.phone,
                        province: data.province,
                        city: data.city,
                        gender: data.gender == "M" ? "male" : "female",
                        image: data?.image || undefined,
                        emailVerified: data?.is_email_verified || false,
                        isLoggedIn: true,
                    }
                    setUser(loggedInUser);
                    /* @ts-ignore cannot get out of range */
                    if (!pageValidators[page]({...loggedInUser, role: getRole(loggedUser.role)})) {
                        router.push(`/login?return=${page}`);
                    }
                    return data;
                } catch (error) {
                    if (failureCount <= 3) {
                        throw new Error("fetch fail");
                    }
                    if (isAxiosError(error) && error.response) {
                        toast({
                            description: "Non autorisé",
                            variant: "destructive",
                        });
                        throw new Error("unauthorized acess");
                    }
                    toast({
                        title: "Erreur de connexion",
                        description: "Nous ne pouvons pas connecter au serveur.",
                        variant: "destructive",
                    });
                    throw new Error("connection error");
                }
            }
        });
        useEffect(() => {
            setIsFetching(true);
        }, [setIsFetching]);

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
        validateAccess,
    }
}
