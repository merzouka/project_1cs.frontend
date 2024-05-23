import { WinnerInfo } from "./winner";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ChoicePopup = (
    {
        winnerInfo,
        onClose,
        onAccept,
    }: {
        winnerInfo: WinnerInfo 
        onClose: () => void;
        onAccept: () => void;
    }) => {
    const ref = useRef<HTMLDivElement>(null);
    const handler = (e: KeyboardEvent) => {
        if (e.key == "Escape") {
            e.preventDefault();
            onClose();
        }
    }

    useEffect(() => {
        ref.current?.focus();
        ref.current?.addEventListener("keydown", handler);
        return () => ref.current?.removeEventListener("keydown", handler);
    }, []);
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            tabIndex={0}
            ref={ref}
            onClick={() => onClose && onClose()}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/45 z-[9999]"
        >
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="max-w-96 rounded-3xl w-full flex flex-col items-center justify-center gap-y-6 bg-white pt-3 md:pt-7 pb-3 px-3"
            >
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <div className="rounded-full size-24 relative">
                        {
                            winnerInfo.image ?
                                <Image 
                                    src={winnerInfo.image}
                                    alt="profile picture"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 75vw"
                                    className="object-fill rounded-full size-full"
                                />:
                                icons.profilePicture(`size-24 rounded-full border-2 ring-offset-1 ${winnerInfo.status == true ? "ring-emerald-400" : "ring-transparent"} ring-2`)
                        }
                    </div>
                    <span className="text-xl font-semibold">{`${winnerInfo.lastName} ${winnerInfo.firstName}`}</span>
                </div>
                <div className="w-full flex justify-stretch items-center">
                    <Button 
                        onClick={() => {
                            onAccept();
                            onClose && onClose();
                        }}
                        className={cn(
                            "flex items-center justify-center gap-x-2 text-white bg-black hover:bg-black/55 font-bold rounded-2xl w-full",
                            "focus-visible:ring-black",
                            winnerInfo.status == true && "bg-black/45",
                        )}
                    >
                        <span>{"Payé"}</span>
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}
