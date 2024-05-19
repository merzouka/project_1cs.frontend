"use client";
import { cn } from "@/lib/utils";
import React, { useState, useMemo } from "react";
import { Participant } from "./participant";
import { Modal } from "./modal";
import { Pages } from "@/constants/pages";
import { SearchBar } from "./search-bar";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@/components/ui/button";

interface Winner {
    image: string | null;
    firstName: string;
    lastName: string;
    nin: string;
    gender: "female" | "male";
}

function getWinners(onSuccess: (winners: Winner[]) => void) {
    // when using useQuery set staleTime to infinity not to refetch
    //
    const predefinedWinners: Winner[] = [
        {
            firstName: "John",
            lastName: "Doe",
            image: "/images/john_doe.jpg",
            nin: "123456789",
            gender: "male",
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            image: "/images/jane_doe.jpg",
            nin: "987654321",
            gender: "female",
        },
        {
            firstName: "Alice",
            lastName: "Smith",
            image: "/images/alice_smith.jpg",
            nin: "456789123",
            gender: "female",
        },
        {
            firstName: "Bob",
            lastName: "Johnson",
            image: "/images/bob_johnson.jpg",
            nin: "789123456",
            gender: "male",
        },
        {
            firstName: "Charlie",
            lastName: "Brown",
            image: "/images/charlie_brown.jpg",
            nin: "321654987",
            gender: "male",
        },
        {
            firstName: "David",
            lastName: "Wilson",
            image: "/images/david_wilson.jpg",
            nin: "654987321",
            gender: "male",
        },
        {
            firstName: "Eva",
            lastName: "Green",
            image: "/images/eva_green.jpg",
            nin: "147258369",
            gender: "female",
        },
        {
            firstName: "Frank",
            lastName: "Miller",
            image: "/images/frank_miller.jpg",
            nin: "963852741",
            gender: "male",
        },
        {
            firstName: "Grace",
            lastName: "Hopper",
            image: "/images/grace_hopper.jpg",
            nin: "852741963",
            gender: "female",
        },
        {
            firstName: "Henry",
            lastName: "Ford",
            image: "/images/henry_ford.jpg",
            nin: "741963852",
            gender: "male",
        },
    ];
    onSuccess(predefinedWinners);
    return {
        isLoading: false,
        data: predefinedWinners,
        isError: false,
    }
}

const Tirage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    // const { validateAccess, user } = useUser();
    const [winners, setWinners] = useState<Winner[]>([]);
    const { isLoading, isError } = useMemo(() => getWinners(setWinners), []);
    const [displayedItems, setDisplayedItems] = useState<Winner[]>([]);
    const [toDisplay, setToDisplay] = useState<Winner[] | undefined>(undefined);
    const [term, setTerm] = useState<string>("");

    const handleSearch = useDebouncedCallback((value: string) => {
        setTerm(value)
    }, 500);

    const handleButtonClick = () => {
        console.log(winners);
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
        setToDisplay(chosenItems)
        setDisplayedItems([...displayedItems, ...chosenItems]);
        setModalOpen(true);
    }

    return (
        <div className="w-full h-full">
            <div className="flex items-center w-full gap-x-2 justify-center relative mb-1 md:mb-4">
                <SearchBar onChange={handleSearch} className="flex-grow md:mb-0"/>
                <Button
                    className={cn(
                        "bg-white text-orange-500 border border-orange-500 rounded-full ",
                        "hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors",
                        "md:absolute md:right-0 md:-top-20"
                    )}
                    size={"sm"}
                    onClick={handleButtonClick}
                    disabled={isError || isLoading || winners.length == 0}
                >
                    {"Mélanger"}
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row justify-center gap-5">
                {displayedItems?.filter((item) => `${item.firstName} ${item.lastName} ${item.nin}`.includes(term))
                    ?.map((user, index) => (
                    <Participant key={index} participant={user} />
                ))}
            </div>
            {
                toDisplay && modalOpen &&
                    <Modal close={() => setModalOpen(false)}>
                        <div className="flex justify-center items-center gap-x-2">
                            {
                                toDisplay?.map((item, i) => (
                                    <Participant participant={item} key={i} />
                                ))
                            }
                        </div>
                    </Modal>
            }
        </div>
    );
};

export default Tirage;
