"use client";
import React, { useEffect, useState } from "react";
import { Participant } from "../../(drawing)/components/participant";

interface ParticipantType {
  image: string | null;
  firstName: string;
  lastName: string;
  nin: string;
}

interface Winner {
  id: number;
  first_name: string;
  last_name: string;
  personal_picture: string;
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

interface DisplayWinnersProps {
  onParticipantClick: (participant: ParticipantType) => void;
}

const DisplayWinners: React.FC<DisplayWinnersProps> = ({
  onParticipantClick,
}) => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<ParticipantType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setWinners([
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
    ]);
  }, []);

  useEffect(() => {
    if (winners.length > 0) {
      const translatedUsers = winners.map((winner) => translate(winner));
      setDisplayedUsers(translatedUsers);
    }
  }, [winners]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setDisplayedUsers(winners.map((winner) => translate(winner)));
    } else {
      const filtered = winners
        .map((winner) => translate(winner))
        .filter((user) =>
          `${user.firstName} ${user.lastName} ${user.nin}`
            .toLowerCase()
            .includes(value)
        );
      setDisplayedUsers(filtered);
    }
  };

  return (
    <div className="px-4 w-full h-full">
      <div className="flex justify-between items-center px-[84px]">
        <input
          type="text"
          placeholder="Search by name or NIN..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-full px-6 py-2 w-[900px]"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        {displayedUsers.map((user, index) => (
          <div
            key={index}
            onClick={() => onParticipantClick(user)}
            className="cursor-pointer"
          >
            <Participant participant={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayWinners;
