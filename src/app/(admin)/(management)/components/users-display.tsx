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

interface PaginatedResponse {
    next: string | null;
    previous: string | null;
    results: User[];
}

export const UsersDisplay = () => {
    const params = useSearchParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users", params.toString()],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.users(params)));
                return response.data as PaginatedResponse;
            } catch (error) {
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
