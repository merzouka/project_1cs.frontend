import { VscAccount } from "react-icons/vsc";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export const Participant = (
    { 
        participant
    }: {
        participant: {
            image: string | null;
            firstName: string;
            lastName: string;
            nin: string;
        }
    }
) => {
    return (
        <div className="bg-white rounded-lg shadow-md shadow-slate-300 p-3 flex items-center w-full gap-x-2">
            <div className="rounded-md flex justify-center items-center h-full aspect-square">
                {
                    participant.image == null?
                        <VscAccount className="size-10"/>:
                        // TODO: change to not use string
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
                }
            </div>
            <div className="flex flex-col py-3 justify-between text-sm">
                <p className="font-bold">{`${participant.firstName} ${participant.lastName}`}</p>
                <p className="text-gray-600">{participant.nin}</p>
            </div>
        </div>
    );
}

export const ParticipantSkeleton = () => {
    return (
        <div className="bg-white rounded-lg shadow-md shadow-slate-300 p-3 flex min-w-15 gap-x-2">
            <div className="rounded-md flex justify-center items-center h-full aspect-square">
                <Skeleton className="rounded-md size-16"/>
            </div>
            <div className="flex flex-col py-4 justify-between">
                <Skeleton className="h-3 w-40"/>
                <Skeleton className="h-2 w-52"/>
            </div>
        </div>
    );
}
