"use client";
import React, { useState } from "react";
import PatientModal from "../components/patient";
import { Participants } from "@/app/(drawing)/components/participants";
const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col pt-16 md:pt-8 p-2 md:p-8 size-full">
      <div className="w-full pt-3 mb-4 lg:mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2">
          La visite médicale
        </h3>
      </div>
      <div>
        <Participants />
      </div>
    </div>
  );
};

export default page;
