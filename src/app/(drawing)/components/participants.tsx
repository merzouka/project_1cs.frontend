"use client";
import { Input } from "@/components/ui/input";
import { Toast } from "@/components/ui/toast";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import { useCitiesStore } from "@/app/(drawing)/stores/cities";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { endpoints, getUrl } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Participant, ParticipantSkeleton } from "./participant";
import { PiWarningThin } from "react-icons/pi";

const users = [
    { image: null, firstName: "FirstName1", lastName: "LastName1", address: "Address1" },
    { image: null, firstName: "FirstName2", lastName: "LastName2", address: "Address2" },
    { image: null, firstName: "FirstName3", lastName: "LastName3", address: "Address3" },
    { image: null, firstName: "FirstName4", lastName: "LastName4", address: "Address4" },
    { image: null, firstName: "FirstName5", lastName: "LastName5", address: "Address5" },
    { image: null, firstName: "FirstName6", lastName: "LastName6", address: "Address6" },
    { image: null, firstName: "FirstName7", lastName: "LastName7", address: "Address7" },
    { image: null, firstName: "FirstName8", lastName: "LastName8", address: "Address8" },
    { image: null, firstName: "FirstName9", lastName: "LastName9", address: "Address9" },
    { image: null, firstName: "FirstName10", lastName: "LastName10", address: "Address10" },
    { image: null, firstName: "FirstName11", lastName: "LastName11", address: "Address11" },
    { image: null, firstName: "FirstName12", lastName: "LastName12", address: "Address12" },
    { image: null, firstName: "FirstName13", lastName: "LastName13", address: "Address13" },
    { image: null, firstName: "FirstName14", lastName: "LastName14", address: "Address14" },
    { image: null, firstName: "FirstName15", lastName: "LastName15", address: "Address15" },
    { image: null, firstName: "FirstName16", lastName: "LastName16", address: "Address16" },
    { image: null, firstName: "FirstName17", lastName: "LastName17", address: "Address17" },
    { image: null, firstName: "FirstName18", lastName: "LastName18", address: "Address18" },
    { image: null, firstName: "FirstName19", lastName: "LastName19", address: "Address19" },
    { image: null, firstName: "FirstName20", lastName: "LastName20", address: "Address20" }
];

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="flex items-center border border-slate-100 rounded-lg px-2 
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 mb-2 md:mb-4
            shadow-md shadow-slate-200
            ">
            <LuSearch className="size-7 text-slate-400" onClick={() => inputRef.current?.focus()}/>
            <Input 
                ref={inputRef}
                className="w-full border-0 focus-visible:ring-0 focus-within:ring-transparent focus-within:ring-offset-0"
                placeholder="Rechercer"
            />
        </div>
    );
}

export const Participants = () => {
    const { cities } = useCitiesStore();
    const { toast } = useToast();
    // TODO: make true
    const { isLoading, data, isError } = useQuery({
        queryKey: ["participants", ...cities],
        enabled: true,
        staleTime: 5 * 60 * 1000,
        queryFn: async () => {
            try {
                return users;
                const response = await axios.post(getUrl(endpoints.citiesUsers), {
                    cities: cities,
                });
                return response.data;
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Impossible de récupérer la liste des participants.",
                    variant: "destructive",
                });
                throw new Error("fetch failed");
            }
        }
    });

    return (
        <> 
            <div className="flex flex-col size-full">
                <SearchBar />
                <div className="relative grow">
                    <div className={cn(
                        "absolute top-0 right-0 bottom-0 left-0 overflow-y-auto",
                        !isError ? "grid grid-cols-1 md:grid-cols-3 grid-flow-column place-items-center gap-3"
                            : "flex justify-center items-center",
                    )}>
                        {
                            isLoading && Array(15).fill(0).map(_ => {
                                return (
                                    <ParticipantSkeleton />
                                );
                            })
                        }
                        {
                            isError && 
                                <div className="flex flex-col gap-y-3 text-gray-300 items-center text-4xl">
                                    <PiWarningThin className="size-14 md:size-16"/>
                                    <p>Erreur</p>
                                </div>
                        }
                        {
                            !isLoading && !isError &&
                                data?.map((participant: any) => <Participant participant={participant}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
