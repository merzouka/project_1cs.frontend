"use client";
import React, { useState } from "react";
import PatientModal from "../components/patient";
import DisplayWinners from "../components/winners";

interface ParticipantType {
  image: string | null;
  firstName: string;
  lastName: string;
  nin: string;
}

const PatientPage = () => {
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
        <h4 className="text-xl md:text-4xl font-semibold mb-1 md:mb-2">
          Les utilisateurs
        </h4>
      </div>
      <div className=" items-center h-screen">
        <DisplayWinners onParticipantClick={handleParticipantClick} />
        {selectedParticipant && (
          <PatientModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            participant={selectedParticipant}
          />
        )}
      </div>
    </div>
  );
};

export default PatientPage;
