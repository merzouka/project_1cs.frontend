import { useEffect, useState } from "react";
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
import { icons } from "@/constants/icons";

export interface Winner {
    image: string | null;
    firstName: string;
    lastName: string;
    nin: string;
    gender: "female" | "male";
}

function translate(winner: any): Winner {
    return {
        firstName: winner.first_name,
        lastName: winner.last_name,
        gender: winner.gender == "F" ? "female": "male",
        nin: winner?.NIN || "000000",
        image: winner.personal_picture,
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
    const { validateAccess } = useUser();
    validateAccess(Pages.drawing);
    const [winners, setWinners] = useState<Winner[]>([]);
    const { toast } = useToast();
    const { isLoading, isError } = useQuery({
        staleTime: Infinity,
        queryKey: ["drawing winners"],
        queryFn: async () => {
            try {
                setEnd(true);
                const response = await AxiosInstance.get(getUrl(endpoints.drawingResult));
                const data = response.data.winners.map((winner: any) => translate(winner));
                setWinners(data);
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
        const chosenIndex = 0;
        const chosenItems = [winners[chosenIndex]];
        let newWinners = [...winners];
        if (chosenItems[0].gender == "female") {
            chosenItems.push(winners[chosenIndex + 1]);
            newWinners.splice(chosenIndex, 2);
        } else {
            newWinners.splice(chosenIndex, 1);
        }
        setWinners(newWinners);
        setToDisplay(chosenItems.map((winner) => <Participant className="shadow-none" key={`winner${winner.lastName}`} participant={winner}/>))
        setDisplayedItems([...displayedItems, ...chosenItems]);
        setModalOpen(true);
        if (newWinners.length == 0) {
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
                        <div className="w-full flex-grow items-center justify-center flex">
                            <div className="flex flex-col items-center justify-center md:gap-y-5 gap-y-2 -translate-y-1/2">
                                {icons.caution("size-32 text-slate-400")}
                                <span className="text-slate-400 text-2xl font-bold text-center text-wrap">
                                    {"Seuls les haajs peuvent voir le tirage."}
                                </span>
                            </div>
                        </div>
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
