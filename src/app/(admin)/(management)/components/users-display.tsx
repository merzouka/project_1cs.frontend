"use client";
import { Users } from "./users";
import { AxiosInstance } from "@/config/axios";
import { endpoints } from "@/constants/endpoints";
import { useQuery } from "@tanstack/react-query";
import { Filter } from "./filter";
import { TablePagination } from "./table-pagination";
import { useSearchParams } from "next/navigation";
import { User } from "./user-row";
import { getUrl } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/hooks/use-user";
// import { Pages } from "@/constants/pages";
import { getRole } from "@/stores/user-store";

interface PaginatedResponse {
    count: number,
    next: string | null;
    previous: string | null;
    results: User[];
}

export const UsersDisplay = () => {
    const params = useSearchParams();
    const { user, useValidateAccess } = useUser();
    // TODO uncomment
    // useValidateAccess(Pages.roles);
    const { toast } = useToast();
    const { data, isLoading, isError } = useQuery({
        retry: 0,
        queryKey: ["users", params.toString(), user.email],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.users(params)));
                const data = {
                    count: response.data.count,
                    next: response.data.next,
                    previous: response.data.previous,
                    results: response.data.results.map((user: {
                        id: number;
                        email: string,
                        firstName: string,
                        lastName: string,
                        cities: number[],
                        provinces: number[],
                        role: string,
                    }) => ({
                            id: user.id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            cities: user.cities,
                            provinces: user.provinces,
                            role: getRole(user.role),
                        })),
                }
                return data as PaginatedResponse;
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récupérer les utilisateurs",
                    variant: "destructive",
                });
                throw new Error("connetion erorr");
            }
        },
    });

    return (
        <div className="flex flex-col items-stretch justify-stretch w-full h-full">
            <Filter />
            <Users users={data?.results} isError={isError} isLoading={isLoading}/>
            <TablePagination next={data?.next || null} previous={data?.previous || null}/>
        </div>
    );
}
