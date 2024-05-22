"use client";
import React, { useState } from "react";
import { SearchBar } from "@/app/components/search-bar";
import { Participant } from "../../(drawing)/components/participant";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";

const DisplayWinners = ({ }) => {
    const [term, setTerm] = useState("");
    const { toast } = useToast();
    const { isLoading, isError, data: patients} = useQuery({
        queryKey: ["patients"],
        queryFn: async () => {
            try {
                // const response = AxiosInstance.get(getUrl(endpoints.patients));
                // return response.data.patients.map((patient) => translate(patient));
                return [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                image: null,
                status: false,
            },
            {
                id: 2,
                firstName: "Jane",
                lastName: "Doe",
                image: null,
                status: null,
            },
            {
                id: 3,
                firstName: "Alice",
                lastName: "Smith",
                image: null,
                status: null,
            },
            {
                id: 4,
                firstName: "Bob",
                lastName: "Johnson",
                image: null,
                status: true,
            },
            {
                id: 5,
                firstName: "Charlie",
                lastName: "Brown",
                image: null,
                status: null,
            },
            {
                id: 6,
                firstName: "David",
                lastName: "Wilson",
                image: null,
                status: false,
            },
            {
                id: 7,
                firstName: "Eva",
                lastName: "Green",
                image: null,
                status: true,
            },
            {
                id: 8,
                firstName: "Frank",
                lastName: "Miller",
                image: null,
                status: null,
            },
            {
                id: 9,
                firstName: "Grace",
                lastName: "Hopper",
                image: null,
                status: true,
            },
            {
                id: 10,
                firstName: "Henry",
                lastName: "Ford",
                image: null,
                status: true,
            },
        ]
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récupérer les patients."
                });
                throw new Error("connection error");
            }
        }
    });

    return (
        <div className="px-4 w-full h-full">
            <div className="flex justify-stretch items-centers">
                <SearchBar 
                    onChange={(value) => setTerm(value)}
                />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {patients.filter((patient) => `${patient.firstName} ${patient.lastName} ${patient.nin}`.toLowerCase().includes(term)).map((user, index) => (
                    <div
                        key={index}
                        onClick={() => onParticipantClick(user)}
                        className="cursor-pointer"
                    >
                        <Participant participant={user} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayWinners;
