import React, { useState, useRef, useEffect } from "react";
import AccepterComponent from "./accepter";
import RejeterComponent from "./rejeter";
import RefusedModal from "./refused";

interface ParticipantType {
  image: string | null;
  firstName: string;
  lastName: string;
  nin: string;
}

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  participant: ParticipantType;
}

const PatientModal: React.FC<PatientModalProps> = ({
  isOpen,
  onClose,
  participant,
}) => {
  const [showRefusedModal, setShowRefusedModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalStyles = {
    width: "557px",
    height: "369px",
  };

  const modalContainerClasses = isOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 rounded-xl shadow-md"
    : "hidden";

  const handleClose = () => {
    onClose();
  };

  const handleAccept = () => {
    handleClose();
  };

  const handleReject = () => {
    setShowRefusedModal(true);
  };

  const handleCloseRefusedModal = () => {
    setShowRefusedModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div ref={modalRef} className={modalContainerClasses} style={modalStyles}>
        {isOpen && (
          <>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={participant.image || "auth\\Rectangle 4547.jpg"}
                  alt="Image"
                  style={{
                    width: "162px",
                    height: "162px",
                    borderRadius: "50%",
                    marginBottom: "0.5rem",
                  }}
                />
                <div className="mt-2">
                  <p className="font-montserrat font-semibold text-30">
                    {participant.firstName} {participant.lastName}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <a href="#" onClick={handleAccept}>
                <AccepterComponent />
              </a>
              <a href="#" onClick={handleReject}>
                <RejeterComponent />
              </a>
            </div>
          </>
        )}
      </div>

      <RefusedModal
        isOpen={showRefusedModal}
        onClose={handleCloseRefusedModal}
      />
    </>
  );
};

export default PatientModal;
