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
                first_name: "John",
                last_name: "Doe",
                personal_picture: "/images/john_doe.jpg",
                nin: "123456789",
            },
            {
                id: 2,
                first_name: "Jane",
                last_name: "Doe",
                personal_picture: "/images/jane_doe.jpg",
                nin: "987654321",
            },
            {
                id: 3,
                first_name: "Alice",
                last_name: "Smith",
                personal_picture: "/images/alice_smith.jpg",
                nin: "456789123",
            },
            {
                id: 4,
                first_name: "Bob",
                last_name: "Johnson",
                personal_picture: "/images/bob_johnson.jpg",
                nin: "789123456",
            },
            {
                id: 5,
                first_name: "Charlie",
                last_name: "Brown",
                personal_picture: "/images/charlie_brown.jpg",
                nin: "321654987",
            },
            {
                id: 6,
                first_name: "David",
                last_name: "Wilson",
                personal_picture: "/images/david_wilson.jpg",
                nin: "654987321",
            },
            {
                id: 7,
                first_name: "Eva",
                last_name: "Green",
                personal_picture: "/images/eva_green.jpg",
                nin: "147258369",
            },
            {
                id: 8,
                first_name: "Frank",
                last_name: "Miller",
                personal_picture: "/images/frank_miller.jpg",
                nin: "963852741",
            },
            {
                id: 9,
                first_name: "Grace",
                last_name: "Hopper",
                personal_picture: "/images/grace_hopper.jpg",
                nin: "852741963",
            },
            {
                id: 10,
                first_name: "Henry",
                last_name: "Ford",
                personal_picture: "/images/henry_ford.jpg",
                nin: "741963852",
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
