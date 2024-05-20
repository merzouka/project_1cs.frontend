import { useEffect, useState } from "react";
import { Participant } from "./participant";
import { Modal } from "./modal";
import { WinnerDisplay } from "./winner-diplay";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";

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
    const [winners, setWinners] = useState<Winner[]>([]);
    const { toast } = useToast();
    useQuery({
        staleTime: Infinity,
        queryKey: ["drawing winners"],
        queryFn: async () => {
            try {
                const predefinedWinners: Winner[] = [
                    {
                        firstName: "John",
                        lastName: "Doe",
                        image: null,
                        nin: "123456789",
                        gender: "male",
                    },
                    {
                        firstName: "Jane",
                        lastName: "Doe",
                        image: null,
                        nin: "987654321",
                        gender: "female",
                    },
                    {
                        firstName: "Alice",
                        lastName: "Smith",
                        image: null,
                        nin: "456789123",
                        gender: "female",
                    },
                    {
                        firstName: "Bob",
                        lastName: "Johnson",
                        image: null,
                        nin: "789123456",
                        gender: "male",
                    },
                    {
                        firstName: "Charlie",
                        lastName: "Brown",
                        image: null,
                        nin: "321654987",
                        gender: "male",
                    },
                    {
                        firstName: "David",
                        lastName: "Wilson",
                        image: null,
                        nin: "654987321",
                        gender: "male",
                    },
                    {
                        firstName: "Eva",
                        lastName: "Green",
                        image: null,
                        nin: "147258369",
                        gender: "female",
                    },
                    {
                        firstName: "Frank",
                        lastName: "Miller",
                        image: null,
                        nin: "963852741",
                        gender: "male",
                    },
                    {
                        firstName: "Grace",
                        lastName: "Hopper",
                        image: null,
                        nin: "852741963",
                        gender: "female",
                    },
                    {
                        firstName: "Henry",
                       lastName: "Ford",
                        image: null,
                        nin: "741963852",
                        gender: "male",
                    },
                ];
                // const respone = AxiosInstance.get(getUrl(endpoints.drawingResult));
                // const data = response.data.winners.map((winner) => translate(winner));
                const data = predefinedWinners;
                // setWinners(data.map((winner) => translate(winner)));
                setWinners(predefinedWinners);
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
    })
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
            displayNext();
        }
    }, [displayed]);

    return (
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
    )
}
