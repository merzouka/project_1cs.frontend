import React, { useState } from "react";
import AccepterComponent from "./accepter";
import RejeterComponent from "./rejeter";
import RefusedModal from "./refused";

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PatientModal: React.FC<PatientModalProps> = ({ isOpen, onClose }) => {
  const [showRefusedModal, setShowRefusedModal] = useState(false); // New state to control showing the refused modal

  const modalStyles = {
    width: "557px",
    height: "369px",
  };

  const modalContainerClasses = isOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 rounded-xl shadow-md"
    : "hidden";

  // Sample patient data
  const patientData = {
    imag: null,
    firstName: "HALLOUCHE",
    lastName: "Abdessamed",
    // Add more patient details here
  };

  const handleClose = () => {
    onClose();
  };

  const handleAccept = () => {
    handleClose(); // Close the modal when AccepterComponent is clicked
  };

  const handleReject = () => {
    setShowRefusedModal(true); // Set state to show the refused modal
  };

  const handleCloseRefusedModal = () => {
    setShowRefusedModal(false); // Close the refused modal
  };

  return (
    <>
      {/* Modal */}
      <div className={modalContainerClasses} style={modalStyles}>
        {isOpen && (
          <>
            {/* Nullable image section */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img
                  src="auth\Rectangle 4547.jpg"
                  alt="Image"
                  style={{
                    width: "162px",
                    height: "162px",
                    borderRadius: "50%",
                    marginBottom: "0.5rem",
                  }}
                />
                {/* First name and last name with padding */}
                <div className="mt-2">
                  {" "}
                  {/* Added margin top */}
                  <p className="font-montserrat font-semibold text-30">
                    {patientData.firstName} {patientData.lastName}
                  </p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-8">
              {/* Increased mt-8 for space */}
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

      {/* Refused Modal */}
      <RefusedModal
        isOpen={showRefusedModal}
        onClose={handleCloseRefusedModal}
      />
    </>
  );
};

export default PatientModal;
