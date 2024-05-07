"use client";
import React, { useState, useEffect } from "react";
import { Participant } from "@/app/(admin)/(drawing)/components/participant";
import MyModal from "./mymodal";
import Modal from "react-modal";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { AxiosInstance } from "@/config/axios";

function translate(obj: any) {
    return {
        firstName: obj.first_name,
        lastName: obj.last_name,
        image: obj.personal_picture,
    }
}

const Tirage = () => {
  const { validateAccess, user } = useUser();
  // validateAccess(Pages.profile);
  const [isOpen, setIsOpen] = useState(false);
  const [chosenUsers, setChosenUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current winner being displayed

  useEffect(() => {
    // Fetch winners for user ID 3 when the component mounts
    fetchWinners(user.id);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(currentIndex + 1); // Move to the next winner
  };
  //@ts-ignore
  const fetchWinners = async (userId) => {
    try {
      const response = await AxiosInstance.get(
        `http://localhost:8000/fetch-winners/`
      );
        console.log(response);
      const winners = response.data.winners;
      setChosenUsers(winners);
      setIsOpen(true); // Open the modal to display the first winner
    } catch (error) {
      console.error("Error fetching winners:", error);
    }
  };

    const [count, setCount] = useState(0);
  const handleMelangerClick = () => {
    setCurrentIndex(Math.round(Math.random())); // Reset currentIndex to start from the first winner
        setCount(count + 1);
    setIsOpen(true); // Open the modal
  };

  return (
    <div className="px-4 w-full h-full">
      <div className="flex justify-between">
        <button
          className="bg-white text-orange-500 border border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors h-10"
          onClick={handleMelangerClick}
                    disabled={count == chosenUsers.length - 1}
        >
          Melanger
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        {/* Display current winner if chosenUsers[currentIndex] is defined */}
        {isOpen && chosenUsers[currentIndex] && (
          <Participant
            //@ts-ignore

            key={chosenUsers[currentIndex].id}
            participant={chosenUsers[currentIndex]}
          />
        )}
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        {/* Pass the current chosen user to the modal if chosenUsers[currentIndex] is defined */}
        {isOpen && chosenUsers[currentIndex] && (
          <MyModal
            isOpen={isOpen}
            onClose={closeModal}
            participant={translate(chosenUsers[currentIndex])}
          />
        )}
      </Modal>
    </div>
  );
};

export default Tirage;
