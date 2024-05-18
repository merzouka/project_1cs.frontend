"use client";
import React, { useState, useEffect } from "react";
import { Participant } from "./participant";
import MyModal from "./mymodal";
import Modal from "react-modal";
import { Pages } from "@/constants/pages";

interface Winner {
  id: number;
  first_name: string;
  last_name: string;
  personal_picture: string;
  nin: string;
}

interface ParticipantType {
  image: string | null;
  firstName: string;
  lastName: string;
  nin: string;
}

function translate(obj: Winner): ParticipantType {
  return {
    firstName: obj.first_name,
    lastName: obj.last_name,
    image: obj.personal_picture,
    nin: obj.nin,
  };
}

const Tirage = () => {
  // const { validateAccess, user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [chosenUsers, setChosenUsers] = useState<Winner[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<ParticipantType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<ParticipantType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDisplayedIndex, setLastDisplayedIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setWinners();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setLastDisplayedIndex(currentIndex);
    const newDisplayedUser = translate(chosenUsers[currentIndex]);
    setDisplayedUsers([...displayedUsers, newDisplayedUser]);
    setFilteredUsers([...filteredUsers, newDisplayedUser]);
    setCurrentIndex(currentIndex + 1);
  };

  const setWinners = () => {
    const predefinedWinners: Winner[] = [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        personal_picture: "/images/john_doe.jpg",
        nin: "123456789",
      },
      {
        id: 2,
        first_name: "Jane",
        last_name: "Doe",
        personal_picture: "/images/jane_doe.jpg",
        nin: "987654321",
      },
      {
        id: 3,
        first_name: "Alice",
        last_name: "Smith",
        personal_picture: "/images/alice_smith.jpg",
        nin: "456789123",
      },
      {
        id: 4,
        first_name: "Bob",
        last_name: "Johnson",
        personal_picture: "/images/bob_johnson.jpg",
        nin: "789123456",
      },
      {
        id: 5,
        first_name: "Charlie",
        last_name: "Brown",
        personal_picture: "/images/charlie_brown.jpg",
        nin: "321654987",
      },
      {
        id: 6,
        first_name: "David",
        last_name: "Wilson",
        personal_picture: "/images/david_wilson.jpg",
        nin: "654987321",
      },
      {
        id: 7,
        first_name: "Eva",
        last_name: "Green",
        personal_picture: "/images/eva_green.jpg",
        nin: "147258369",
      },
      {
        id: 8,
        first_name: "Frank",
        last_name: "Miller",
        personal_picture: "/images/frank_miller.jpg",
        nin: "963852741",
      },
      {
        id: 9,
        first_name: "Grace",
        last_name: "Hopper",
        personal_picture: "/images/grace_hopper.jpg",
        nin: "852741963",
      },
      {
        id: 10,
        first_name: "Henry",
        last_name: "Ford",
        personal_picture: "/images/henry_ford.jpg",
        nin: "741963852",
      },
    ];

    setChosenUsers(predefinedWinners);
  };

  const handleMelangerClick = () => {
    if (currentIndex < chosenUsers.length) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (lastDisplayedIndex === chosenUsers.length - 1) {
      setIsOpen(false);
    }
  }, [lastDisplayedIndex, chosenUsers]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setFilteredUsers(displayedUsers);
    } else {
      const filtered = displayedUsers.filter((user) =>
        `${user.firstName} ${user.lastName} ${user.nin}`
          .toLowerCase()
          .includes(value)
      );
      setFilteredUsers(filtered);
    }
  };

  return (
    <div className="px-4 w-full h-full">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name or NIN..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-full px-6 py-2 w-[900px]"
        />
        <button
          className="bg-white text-orange-500 border border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors h-10 ml-4"
          onClick={handleMelangerClick}
          disabled={lastDisplayedIndex === chosenUsers.length - 1}
        >
          Melanger
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        {filteredUsers.map((user, index) => (
          <Participant key={index} participant={user} />
        ))}
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
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
