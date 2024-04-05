"use client";

import { useToast } from "@/components/ui/use-toast";
import { endpoints, getUrl } from "@/constants/api";
import { useUser } from "@/hooks/use-user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export const Citites = () => {
    const { toast } = useToast();
    const { user } = useUser();
    // TODO: get info from user without request
    // TODO: make true
    const [isFetching, setIsFetching] = useState(false);
    const { isLoading, isError, data } = useQuery({
        queryKey: ["cities", user.id],
        queryFn: async () => {
            try {
                const response = await axios.get(getUrl(endpoints.citites(user.id)));
                setIsFetching(false);
                return response.data;
            } catch (error) {
                toast({
                    title: "",
                    variant: "destructive",
                });
                throw new Error("connection erorr");
            }
        }
    });

    return (
        <p className="text-slate-400 flex gap-x-2">
            {`Les communes concernées sont:`}
            {
                isLoading &&
                <Skeleton className="w-80 h-8 rounded-full"/>
            }
            { 
                isError &&
                    "erreur"
            }
            {
                // TODO: change name to appropriate field
                !isLoading && !isError && `${data.map((city) => city.name)}`
            }
        </p>
    );
}
