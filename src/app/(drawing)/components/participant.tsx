"use client";
import { VscAccount } from "react-icons/vsc";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState, useEffect } from "react";

export const Participant = ({
  participant,
}: {
  participant: {
    image: string | null;
    firstName: string;
    lastName: string;
    address: string;
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Set the delay to 3000 milliseconds (3 seconds)

    // Clear the timer when the component unmounts or when participant changes
    return () => clearTimeout(timer);
  }, [participant]);

  return (
    <div
      className="bg-white rounded-lg shadow-md shadow-slate-300 p-3 flex items-center w-full gap-x-2"
      style={{ width: "320px", height: "90px" }}
    >
      <div className="rounded-md flex justify-center items-center h-full aspect-square">
        {/* Conditionally render the image based on isOpen state */}
        {isOpen && participant.image ? (
          <div className="relative w-10 aspect-square">
            <Image
              src={participant.image}
              alt="profile image"
              width={40} // Adjust width as needed
              height={40} // Adjust height as needed
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
        ) : (
          <VscAccount className="size-10" />
        )}
      </div>
      <div className="flex flex-col py-3 justify-between text-sm">
        <p className="font-bold">{`${participant.firstName} ${participant.lastName}`}</p>
        <p className="text-gray-600">{participant.address}</p>
      </div>
    </div>
  );
};

export const ParticipantSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md shadow-slate-300 p-3 flex min-w-15 gap-x-2">
      <div className="rounded-md flex justify-center items-center h-full aspect-square">
        <Skeleton className="rounded-md size-16" />
      </div>
      <div className="flex flex-col py-4 justify-between">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-2 w-52" />
      </div>
    </div>
  );
};
