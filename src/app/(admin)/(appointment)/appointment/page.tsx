"use client";
import React, { useState } from "react";
import PatientModal from "../components/patient";
import WinnersComponent from "../components/winners";
const PatientPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <WinnersComponent />
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      <PatientModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default PatientPage;
