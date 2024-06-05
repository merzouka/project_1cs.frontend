import { useEffect, useRef, useState } from "react";
import { Participant } from "./participant";
import { Modal } from "./modal";
import { WinnerDisplay } from "./winner-diplay";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { Spinner } from "@/components/custom/spinner";
import { ErrorDisplay } from "@/app/components/error-display";

export interface Winner {
    id: number;
    image: string | null;
    firstName: string;
    lastName: string;
    city?: string;
    nin?: string;
    gender: "female" | "male";
    mahramId?: number;
}

function translate(winner: any): Winner {
    return {
        id: id,
        firstName: winner.first_name,
        lastName: winner.last_name,
        gender: winner.gender == "F" ? "female": "male",
        city: winner.city,
        image: winner.personal_picture,
        mahramId: winner.maahram_id
    }
}

export const DrawingDisplay = ({
    displayed,
    term,
    setEnd,
    closeModal = false,
    onModalClose,
}: {
        displayed: number;
        term?: string;
        setEnd: (end: boolean) => void;
        closeModal?: boolean;
        onModalClose?: () => void;
    }) => {
    const { useValidateAccess: validateAccess, user } = useUser();
    validateAccess(Pages.drawing);
    const [index, setIndex] = useState<number>(0);
    const { toast } = useToast();
    const { data: winners, isLoading, isError } = useQuery({
        staleTime: Infinity,
        queryKey: ["drawing winners", user.email],
        queryFn: async () => {
            try {
                setEnd(true);
                const response = await AxiosInstance.get(getUrl(endpoints.drawingResult));
                const data = response.data.winners.map((winner: any) => translate(winner));
                setEnd(false);
                return data;
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récupérer les gagnants.",
                    variant: "destructive",
                });
                throw new Error("connection error");
            }
        }
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [displayedItems, setDisplayedItems] = useState<Winner[]>([]);
    const [toDisplay, setToDisplay] = useState<React.ReactNode[] | undefined>();

    const displayNext = () => {
        let nextIndex = index;
        const chosenItems = [winners[index]];
        if (chosenItems[0].gender == "female") {
            mahram = winners.find((winner) => winner.id)
            chosenItems.push(winners[index + 1]);
            nextIndex += 2;
        } else {
            nextIndex += 1;
        }
        setIndex(nextIndex);
        setToDisplay(chosenItems.map((winner) => <Participant className="shadow-none" key={`winner${winner.lastName}`} participant={winner}/>))
        setDisplayedItems([...displayedItems, ...chosenItems]);
        setModalOpen(true);
        if (nextIndex == winners.length) {
            setEnd(true);
        }
    }

    useEffect(() => {
        if (displayed > 0) {
            if (winners.length > 0) {
                displayNext();
            }
        }
    }, [displayed]);

    return (
        <>
            {
                isLoading ?
                    <div className="w-full h-full items-center justify-center flex">
                        <Spinner text={"show"} direction={"col"} size={"xl"} className="text-slate-400"/>
                    </div>
                    :
                    isError ?
                        <ErrorDisplay />
                        :
                        <>
                            <div className="relative w-full flex-grow overflow-y-scroll">
                                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row justify-center gap-3 
                                    absolute top-0 right-0 left-0">
                                    {displayedItems?.filter((item) => `${item.firstName} ${item.lastName} ${item.nin}`.includes(term || ""))
                                        ?.map((user, index) => (
                                            <Participant key={index} participant={user} />
                                        ))}
                                </div>
                            </div>
                            {
                                toDisplay && !closeModal && modalOpen &&
                                    <Modal close={() => {
                                        setModalOpen(false);
                                        onModalClose && onModalClose();
                                    }}>
                                        <div className="w-full h-full justify-center items-center gap-x-2 flex">
                                            <WinnerDisplay chosen={toDisplay}/>
                                        </div>
                                    </Modal>
                            }
                        </>
            }
        </>
    )
}
