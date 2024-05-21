"use client";
import { useState } from "react";
import { SearchBar } from "@/app/components/search-bar";
import { useQuery } from "@tanstack/react-query";

export const Winners = ({ endpoint }: { endpoint: string }) => {
    const [term, setTerm] = useState("");
    const { isLoading, isError, data: winners} = useQuery({
        queryKey: ["winners", endpoint],
        queryFn: async () => {
            try {

            } catch (error) {

            }
        }
    })

    return (
        <div className="flex flex-col items-center justify-center gap-y-6 w-full h-full p-3">
            <SearchBar onChange={setTerm} />
            <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-start">
                {}
            </div>
        </div>
    );
}
