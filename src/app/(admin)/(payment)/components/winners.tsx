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
import { AnimatePresence } from "framer-motion";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { ErrorDisplay } from "@/app/components/error-display";

function translate(winner: any): WinnerInfo & { disabled: boolean } {
    return {
        id: winner.id_winner,
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
        page,
    }: {
        itemsEndpoint: string;
        updateEndpoint: string;
        page: Pages
    }) => {
    const { useValidateAccess: validateAccess } = useUser();
    validateAccess(page);

    const [term, setTerm] = useState("");
    const [winner, setWinner] = useState<WinnerInfo | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState(false);
    const { toast } = useToast();
    const { isLoading, isError, data: winners, failureCount} = useQuery({
        queryKey: ["winners", itemsEndpoint],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(itemsEndpoint));
                const winners = response.data.winners.map((winner: any) => translate(winner)) as (WinnerInfo & { disabled: boolean })[];
                return winners;
            } catch (error) {
                if (failureCount < 3) {
                    throw new Error("failure");
                }
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
        mutationFn: async (winnerStatus: { id: number, status: true | null }) => {
            const response = await AxiosInstance.patch(getUrl(updateEndpoint), {
                id_winner: winnerStatus.id,
                status: winnerStatus.status,
            });
            return response.data;
        },
        onMutate: (variables: { id: number, status: true | null }) => {
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
                            <ErrorDisplay />:
                            <div tabIndex={-1} className="grid grid-cols-1 md:grid-cols-3 items-start justify-start absolute top-0 right-0 left-0 gap-3 p-2 overflow-x-visible">
                                {
                                    winners?.filter(
                                        (winner)=> `${winner.lastName} ${winner.firstName} ${winner.id}`.toLowerCase().includes(term)
                                    ).map((winner) => (
                                        <Winner
                                            key={winner.id}
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
            <AnimatePresence initial={true}>
                {
                    winner && modalOpen &&
                        <ChoicePopup 
                            onClose={() => setModalOpen(false)}
                            onAccept={() => mutate({ id: winner.id, status: winner.status === true ? null : true })}
                            winnerInfo={winner}
                        />
                }
            </AnimatePresence>
        </div>
    );
}
