"use client";
import { Users } from "./users";
import { AxiosInstance } from "@/config/axios";
import { endpoints } from "@/constants/endpoints";
import { useQuery } from "@tanstack/react-query";
import data from "./data";
import { Filter } from "./filter";
import { TablePagination } from "./table-pagination";

export const UsersDisplay = () => {
    const { data: tmp, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                // const response = AxiosInstance.get(endpoints.users);
                // return response;
            } catch (error) {
                throw new Error("connetion erorr");
            }
        },
    });

    return (
        <div className="flex flex-col items-stretch justify-stretch w-full h-full">
            <Filter />
            <Users users={data.results}/>
            <TablePagination next={data.next} previous={data.previous}/>
        </div>
    );
}
