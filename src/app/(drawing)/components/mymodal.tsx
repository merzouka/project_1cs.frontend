import React, { useState } from "react";
import Modal from "react-modal";
import { Skeleton } from "@/components/ui/skeleton";
import { Participant } from "@/app/(drawing)/components/participant";
// @ts-ignore
const MyModal = ({ isOpen, onClose, participant }) => {
  // @ts-ignore

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Close modal only if clicked on overlay
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-black opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="modal-container bg-white rounded-lg shadow-md p-3">
        {/* Participant component */}
        <Participant participant={participant} />
      </div>
    </div>
  );
};

export default MyModal;
