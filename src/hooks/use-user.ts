import { Role, useUserStore } from "@/stores/user-store"
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { Pages } from "@/constants/pages";
import { pageValidators } from "@/constants/page-validators";
import { useQuery } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { useToast } from "@/components/ui/use-toast";

function hasAccess(userRoles: Role[], requiredRoles: Role[]) {
    if ((requiredRoles.filter((role) => !userRoles.includes(role))).length > 0) {
        return false;
    }
    return true;
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
    function validateAccess(page: Pages) {
        const { isLoading, isError, data, failureCount } = useQuery({
            queryKey: ["profile"],
            queryFn: async () => {
                try {
                    const response = await axios.get(getUrl(endpoints.currentUser));
                    const data = response.data;
                    setUser({
                        isLoggedIn: true,
                        email: data.email,
                        emailVerified: data.is_email_verified,
                        dateOfBirth: data.dateOfBirth,
                        role: data.role,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        phone: data.phone,
                        gender: data.gender,
                        city: data.city,
                        province: data.province,
                    })
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
