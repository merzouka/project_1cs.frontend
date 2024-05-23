"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints"
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Participant, ParticipantSkeleton } from "./participant";
import { PiWarningThin } from "react-icons/pi";
import { Toaster } from "@/components/ui/toaster";
import { AxiosInstance } from "@/config/axios";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { SearchBar } from "@/app/components/search-bar";


export const Participants = () => {
    const { validateAccess } = useUser();
    // validateAccess(Pages.drawing);
    const { toast } = useToast();
    const { isLoading, data, isError, failureCount } = useQuery({
        queryKey: ["participants"],
        staleTime: 5 * 60 * 1000,
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.participants));
                return response.data;
            } catch (error) {
                if (failureCount == 3) {
                    toast({
                        title: "Erreur de connexion",
                        description: "Impossible de récupérer la liste des participants.",
                        variant: "destructive",
                    });
                }
                throw new Error("fetch failed");
            }
        }
    });
    const [term, setTerm] = useState("");
    const participants = term === "" ? data : data.filter(
        (participant: any) => `${participant.user.first_name} ${participant.user.last_name}`.toLowerCase().includes(term)
    );

    return (
        <> 
            <div className="flex flex-col size-full">
                <SearchBar onChange={setTerm}/>
                <div className="relative grow">
                    <div className={cn(
                        "absolute top-0 right-0 bottom-0 left-0 overflow-y-auto",
                        !isError ? "grid grid-cols-1 md:grid-cols-3 grid-flow-column place-items-start md:place-items-center gap-3"
                            : "flex justify-center items-center",
                    )}>
                        {
                            isLoading && Array(12).fill(0).map((_, i) => {
                                return (
                                    <ParticipantSkeleton key={i} />
                                );
                            })
                        }
                        {
                            isError && 
                                <div className="flex flex-col gap-y-3 text-gray-300 items-center text-4xl">
                                    <PiWarningThin className="size-14 md:size-16"/>
                                    <p>{"Erreur"}</p>
                                </div>
                        }
                        {
                            !isLoading && !isError &&
                                participants?.map((participant: any) => <Participant key={participant.id} participant={{
                                    image: participant.personal_picture,
                                    firstName: participant.first_name,
                                    lastName: participant.last_name,
                                    nin: participant.NIN,
                                }}/>)
                        }
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
}
