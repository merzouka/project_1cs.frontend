import React from "react";

interface RefusedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RefusedModal: React.FC<RefusedModalProps> = ({ isOpen, onClose }) => {
  const modalStyles = {
    width: "557px",
    height: "380px", // Adjusted height to accommodate the text area
  };

  const modalContainerClasses = isOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 rounded-xl shadow-md"
    : "hidden";

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {/* Modal */}
      <div className={modalContainerClasses} style={modalStyles}>
        {/* Modal header */}
        <div className="pb-4">
          <h3 className="font-montserrat font-semibold text-2xl">
            Why did I get refused?
          </h3>
        </div>
        {/* Text area */}
        <div className="flex justify-center">
          <textarea
            className="border border-gray-300 rounded-md p-2"
            style={{ height: "223px", width: "548px" }}
            placeholder="Enter your explanation here..."
          ></textarea>
        </div>
        {/* Continue button */}
        {isOpen && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleClose}
              className="bg-black text-white font-bold py-2 px-4 rounded-xl "
              style={{ height: "42px", width: "548px" }}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RefusedModal;
