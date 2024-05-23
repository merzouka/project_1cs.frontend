import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export interface WinnerInfo {
    image: string | null;
    firstName: string;
    lastName: string;
    id: number;
    status: true | null;
}

export const Winner = (
    { 
        winnerInfo,
        openPopup,
        disabled
    }: {
        winnerInfo: WinnerInfo,
        openPopup: (winner: WinnerInfo) => void;
        disabled?: boolean,
    }
) => {
    return (
        <div 
            tabIndex={0}
            onKeyDownCapture={(e) => {
                if (e.key == "Enter") {
                    e.preventDefault();
                    openPopup(winnerInfo);
                }
            }}
            onClick={() => !disabled && openPopup(winnerInfo)}
            className={cn(
                "flex w-full max-w-96 gap-x-2 bg-white shadow-xl px-5 py-3 rounded-xl border-2 border-transparent items-center justify-center",
                !disabled && "hover:scale-105 hover:transition-all transition-all",
                winnerInfo.status == true && (disabled ? "border-emerald-200" : "border-emerald-400" ),
                "hover:cursor-pointer",
                disabled && "bg-slate-100/45 hover:cursor-default shadow-none",
                "focus-visible:ring-2 focus-visible:ring-offset-4"
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
            <div className={cn(
                "flex-grow flex flex-col items-start justify-start h-full gap-y-1",
                disabled && "text-slate-300",
            )}>
                <span className="font-bold capitalize">{`${winnerInfo.firstName} ${winnerInfo.lastName}`}</span>
                <span className={cn(
                    "text-slate-500 text-sm",
                    disabled && "text-slate-200",
                )}>{winnerInfo.id}</span>
            </div>
            {
                winnerInfo.status == null?
                    <IoIosCheckmarkCircleOutline className={cn(
                        "text-transparent size-8",
                    )}/>:
                    <IoIosCheckmarkCircleOutline className={cn(
                        "text-emerald-400 size-8 transition-all",
                        disabled && "text-emerald-200",
                    )}/>

            }
        </div>
    );
}
