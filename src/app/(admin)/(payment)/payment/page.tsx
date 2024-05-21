"use client";
import React, { useState } from "react";
import DisplayWinners from "../../(appointment)/components/winners";
import PayModal from "../components/payemodal";
interface ParticipantType {
  image: string | null;
  firstName: string;
  lastName: string;
  nin: string;
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParticipant, setSelectedParticipant] =
    useState<ParticipantType | null>(null);

  const handleParticipantClick = (participant: ParticipantType) => {
    setSelectedParticipant(participant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedParticipant(null);
  };

  return (
    <div>
      <div className="w-full pt-3 mb-4 lg:mb-8">
        <h4 className="py-[20px] px-4 text-left border-b-0 font-medium text-gray-800 text-[28px]">
          Les utilisateurs
        </h4>
      </div>
      <div className="items-center h-screen">
        <DisplayWinners onParticipantClick={handleParticipantClick} />
        {selectedParticipant && (
          <PayModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            participant={selectedParticipant}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
