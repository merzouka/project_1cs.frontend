"use client";
import { useState } from "react";
import { Winner, WinnerInfo } from "../components/winner";
import { ChoicePopup } from "../components/choice-popup";

const PatientPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [winner, setWinner] = useState<WinnerInfo>({
        id: 123123123,
        firstName: "Youness",
        lastName: "Loser",
        status: null,
        image: undefined,
    });

    return (
        <div className="md:px-4 p-2 flex flex-col w-full h-full">
            <div className="w-full pt-3 mb-4 lg:mb-8">
                <h4 className="text-xl md:text-3xl font-semibold mb-1 md:mb-2">
                    {"Les pèlerins"}
                </h4>
            </div>
            <div className="flex justify-center items-center flex-grow">
                <Winner 
                    openPopup={(winner) => {
                        setWinner(winner);
                        setModalOpen(true);
                    }}
                    winnerInfo={winner}
                />
                {
                    modalOpen &&
                        <ChoicePopup 
                            onClose={() => setModalOpen(false)}
                            onAccept={() => setWinner({ ...winner, status: winner.status == true ? null : true })}
                            onDeny={() => setWinner({ ...winner, status: winner.status == false ? null : false })}
                            winnerInfo={winner}
                        />
                }
            </div>
        </div>
    );
};

export default PatientPage;
