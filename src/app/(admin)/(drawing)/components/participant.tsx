"use client";
import { VscAccount } from "react-icons/vsc";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const Participant = ({
    participant,
    className,
}: {
        participant: {
            image: string | null;
            firstName: string;
            lastName: string;
            city?: string;
            nin?: string;
        };
        className?: string;
    }) => {
    return (
        <div className={cn(
            "bg-white rounded-lg shadow-md shadow-slate-300 p-3 flex items-center w-[339px] h-[93px] gap-x-2 relative z-[10]",
            className,
        )}>
            <div className="rounded-md flex justify-center items-center h-full aspect-square">
                {participant.image == null ? (
                    <VscAccount className="size-10" />
                ) : (
                        <div className="relative w-10 aspect-square">
                            <Image
                                src={participant.image}
                                alt="profile image"
                                sizes="100%"
                                fill
                                className="rounded-lg"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    )}
            </div>
            <div className="flex flex-col py-3 justify-between text-sm">
                <p className="font-bold">{`${participant.firstName} ${participant.lastName}`}</p>
                <p className="text-gray-600">{participant.city || participant.nin}</p>
            </div>
        </div>
    );
};

export const ParticipantSkeleton = () => {
    return (
        <div className="bg-white rounded-lg shadow-md shadow-slate-300 p-3 flex w-[339px] h-[93px] gap-x-2">
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
