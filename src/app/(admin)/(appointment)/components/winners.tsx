"use client";
import { useState } from "react";
import { SearchBar } from "@/app/components/search-bar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
import { Winner, WinnerInfo } from "./winner";
import { ChoicePopup } from "./choice-popup";
import { Spinner } from "@/components/custom/spinner";
import { icons } from "@/constants/icons";
import { AnimatePresence } from "framer-motion";

function translate(winner: any): WinnerInfo & { disabled: boolean } {
    return {
        id: winner.id,
        firstName: winner.first_name,
        lastName: winner.last_name,
        image: winner.profile_picture,
        status: winner.status,
        disabled: false,
    };
}

export const Winners = (
    {
        itemsEndpoint,
        updateEndpoint,
    }: {
        itemsEndpoint: string;
        updateEndpoint: string;
    }) => {
    const [term, setTerm] = useState("");
    const [winner, setWinner] = useState<WinnerInfo | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState(false);
    const { toast } = useToast();
    const { isLoading, isError, data: winners} = useQuery({
        queryKey: ["winners", itemsEndpoint],
        queryFn: async () => {
            try {
                const data: (WinnerInfo & { disabled: boolean; })[] = [
                    {
                        id: 1,
                        firstName: "John",
                        lastName: "Doe",
                        image: null,
                        status: false,
                        disabled: false,
                    },
                    {
                        id: 2,
                        firstName: "Jane",
                        lastName: "Doe",
                        image: null,
                        status: null,
                        disabled: false,
                    },
                    {
                        id: 3,
                        firstName: "Alice",
                        lastName: "Smith",
                        image: null,
                        status: null,
                        disabled: false,
                    },
                    {
                        id: 4,
                        firstName: "Bob",
                        lastName: "Johnson",
                        image: null,
                        status: true,
                        disabled: false,
                    },
                    {
                        id: 5,
                        firstName: "Charlie",
                        lastName: "Brown",
                        image: null,
                        status: null,
                        disabled: false,
                    },
                    {
                        id: 6,
                        firstName: "David",
                        lastName: "Wilson",
                        image: null,
                        status: false,
                        disabled: false,
                    },
                    {
                        id: 7,
                        firstName: "Eva",
                        lastName: "Green",
                        image: null,
                        status: true,
                        disabled: false,
                    },
                    {
                        id: 8,
                        firstName: "Frank",
                        lastName: "Miller",
                        image: null,
                        status: null,
                        disabled: false,
                    },
                    {
                        id: 9,
                        firstName: "Grace",
                        lastName: "Hopper",
                        image: null,
                        status: true,
                        disabled: false,
                    },
                    {
                        id: 10,
                        firstName: "Henry",
                        lastName: "Ford",
                        image: null,
                        status: true,
                        disabled: false,
                    },
                ];
                return data;
                // const response = await AxiosInstance.get(getUrl(itemsEndpoint));
                // const winners = response.data.winners.map((winner) => translate(winner));
                // return winners;
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récépurer les pèlerins.",
                });
                throw new Error("connection error");
            }
        }
    });

    const queryClient = useQueryClient();
    // check winners before mutation
    const { mutate } = useMutation({
        retry: 3,
        mutationFn: async (winnerStatus: { id: number, status: boolean | null }) => {
            const response = await AxiosInstance.patch(getUrl(updateEndpoint), {
                id: winnerStatus.id,
                status: winnerStatus.status,
            });
            return response.data;
        },
        onMutate: (variables: { id: number, status: boolean | null }) => {
            if (!winners) {
                return;
            }
            const index = winners?.findIndex((winner) => winner.id == variables.id);
            const winner =  winners && winners[index];
            const newWinners = [...winners];
            const newWinner: WinnerInfo & { disabled: boolean } = {
                ...winner,
                image: winner.image,
                status: variables.status,
                disabled: true,
            };
            newWinners[index] = newWinner;
            queryClient.setQueryData(["winners", itemsEndpoint], newWinners);

            return {
                winner,
                index
            };
        },
        onSuccess: (_, __, context) => {
            const newWinners = [...(queryClient.getQueryData(["winners", itemsEndpoint]) as (WinnerInfo & { disabled: boolean })[])];
            newWinners[context?.index] = {
                ...newWinners[context?.index],
                disabled: false,
            };
            queryClient.setQueryData(["winners", itemsEndpoint], newWinners);
        },
        onError: (_, __, context) => {
            if (!context) {
                return;
            }
            const winners = [...(queryClient.getQueryData(["winners", itemsEndpoint]) as (WinnerInfo & { disabled: boolean })[])];
            winners[context?.index] = {
                ...context?.winner,
                disabled: false,
            };
            queryClient.setQueryData(["winners", itemsEndpoint], winners);
            toast({
                variant: "destructive",
                title: "Erreur de connexion",
                description: `La mise à jour du status du pèlerin #${context?.winner.id} à échoué`,
            });
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["winners", itemsEndpoint] });
        }
    });

    return (
        <div className="flex flex-col items-center justify-center gap-y-3 w-full h-full p-3">
            <SearchBar onChange={setTerm} className="w-full"/>
            <div className="flex-grow w-full flex relative items-center justify-center overflow-y-scroll">
                {
                    isLoading ?
                        <Spinner size={"xl"} text={"show"} direction={"col"} className="text-slate-400"/>:
                        isError ?
                            <div className="w-full flex-grow items-center justify-center flex">
                                <div className="flex flex-col items-center justify-center md:gap-y-5 gap-y-2 -translate-y-1/2">
                                    {icons.caution("size-32 text-slate-400")}
                                    <span className="text-slate-400 text-2xl font-bold text-center text-wrap">
                                        {"Seuls les haajs peuvent voir le tirage."}
                                    </span>
                                </div>
                            </div>:
                            <div tabIndex={-1} className="grid grid-cols-1 md:grid-cols-3 items-start justify-start absolute top-0 right-0 left-0 gap-3 p-2 overflow-x-visible">
                                {
                                    winners?.filter(
                                        (winner)=> `${winner.lastName} ${winner.firstName} ${winner.id}`.toLowerCase().includes(term)
                                    ).map((winner) => (
                                        <Winner
                                            winnerInfo={{
                                                id: winner.id,
                                                status: winner.status,
                                                lastName: winner.lastName,
                                                firstName: winner.firstName,
                                                image: winner.image,
                                            }}
                                            openPopup={(winner) => {
                                                setModalOpen(true);
                                                setWinner({
                                                    id: winner.id,
                                                    status: winner.status,
                                                    lastName: winner.lastName,
                                                    firstName: winner.firstName,
                                                    image: winner.image,
                                                });
                                            }}
                                            disabled={winner.disabled}
                                        />
                                    ))
                                }
                            </div>

                }
            </div>
            <AnimatePresence intial={true}>
                {
                    winner && modalOpen &&
                        <ChoicePopup 
                            onClose={() => setModalOpen(false)}
                            onAccept={() => mutate({ id: winner.id, status: winner.status === true ? null : true })}
                            onDeny={() => mutate({ id: winner.id, status: winner.status === false ? null : false })}
                            winnerInfo={winner}
                        />
                }
            </AnimatePresence>
        </div>
    );
}
