"use client";
import React, { useState } from "react";
import { Participant } from "@/app/(drawing)/components/participant";
import MyModal from "./mymodal";
import Modal from "react-modal";
const users = [
  {
    id: 1,
    image: null,
    firstName: "FirstName1",
    lastName: "LastName1",
    address: "Address1",
  },
  {
    id: 2,
    image: null,
    firstName: "FirstName2",
    lastName: "LastName2",
    address: "Address2",
  },
  {
    id: 3,
    image: null,
    firstName: "FirstName3",
    lastName: "LastName3",
    address: "Address3",
  },
  // Add more users as needed
];

const Tirage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenUsers, setChosenUsers] = useState<
    {
      id: number;
      image: null | string;
      firstName: string;
      lastName: string;
      address: string;
    }[]
  >([]);

  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => {
    setIsOpen(true);
    // Choose a random user
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    setChosenUsers((prevUsers) => [...prevUsers, randomUser]);
  };

  const closeModal = () => setIsOpen(false);
  // @ts-ignore

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  return (
    <div className="px-4 w-full h-full">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-white border border-white rounded-full py-2 px-6 mb-4 w-full max-w-[850px] shadow-md"
        />
        <button
          className="bg-white text-orange-500 border border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors mr-6 h-10"
          onClick={openModal}
        >
          Melanger
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        {/* Display chosen users */}
        {chosenUsers.map((user) => (
          <Participant key={user.id} participant={user} />
        ))}
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        {/* Pass the last chosen user to the modal */}
        <MyModal
          isOpen={isOpen}
          onClose={closeModal}
          participant={chosenUsers[chosenUsers.length - 1]}
        />
      </Modal>
    </div>
  );
};

export default Tirage;
