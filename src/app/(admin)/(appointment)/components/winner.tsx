"use client";
import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export interface WinnerInfo {
    image: string | undefined;
    firstName: string;
    lastName: string;
    id: number;
    status: boolean | null;
}

export const Winner = (
    { 
        winnerInfo,
        openPopup,
    }: {
        winnerInfo: WinnerInfo,
        openPopup: (winner: WinnerInfo) => void;
    }
) => {
    return (
        <div 
            onClick={() => openPopup(winnerInfo)}
            className={cn(
            "flex w-full max-w-96 gap-x-2 bg-white shadow-xl px-5 py-3 rounded-xl border-2 border-transparent items-center justify-center",
            winnerInfo.status == true ? "border-emerald-400" : (winnerInfo.status == false && "border-red-400"),
                "hover:cursor-pointer"
        )}>
            <div className="size-14">
                {
                    winnerInfo.image ?
                        <Image 
                            src={winnerInfo.image}
                            alt="profile image"
                            fill
                            sizes="50vw"
                            className="object-fill size-14 rounded-md"
                        />:
                        <VscAccount className="size-14"/>
                }
            </div>
            <div className="flex-grow flex flex-col items-start justify-start h-full gap-y-1">
                <span className="font-bold capitalize">{`${winnerInfo.firstName} ${winnerInfo.lastName}`}</span>
                <span className="text-slate-500 text-sm">{winnerInfo.id}</span>
            </div>
            {
                winnerInfo.status == null?
                    <IoIosCheckmarkCircleOutline className="text-transparent size-8"/>:
                    (
                        winnerInfo.status == true?
                            <IoIosCheckmarkCircleOutline className="text-emerald-400 size-8"/>:
                            <IoIosCloseCircleOutline className="text-red-400 size-8"/>
                    )
            }
        </div>
    );
}
