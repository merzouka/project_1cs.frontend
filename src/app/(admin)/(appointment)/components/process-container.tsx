import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { LuMinimize2 } from "react-icons/lu";
import { LuMaximize2 } from "react-icons/lu";
import { icons } from "@/constants/icons";
import { motion, AnimatePresence } from "framer-motion";

export const ProcessContainer = (
    {
        onClose,
        onMinimizeChange,
        pingCount,
        title,
        className,
        children,
    }: {
        onClose: () => void;
        onMinimizeChange: (newState: boolean) => void;
        pingCount: number;
        title: string;
        className?: string;
        children?: React.ReactNode;
    }
) => {
    const [showPing, setShowPing] = useState(false);
    const [minimized, setMinimized] = useState(false);
    useEffect(() => {
        minimized && setShowPing(true);
        return () => setShowPing(false);
    }, [pingCount]);

    return (
        <div className="w-full h-full flex flex-col justify-end">
            <motion.div layout className={cn(
                "rounded-t-2xl p-3 flex items-center justify-start bg-black text-white gap-x-3",
                minimized && "rounded-b-2xl",
                className,
            )}>
                <p className="font-bold flex-grow">{title}</p>
                <div className="size-4"><FaCircleExclamation className={cn(
                    "text-orange-400 size-full",
                    !showPing && "text-transparent"
                )}/></div>
                {
                    minimized ?
                        <Button
                            size={"icon"}
                            className="hover:text-gray-400 size-6 bg-transparent hover:bg-transparent"
                            onClick={() => {
                                setMinimized(false);
                                setShowPing(false);
                                onMinimizeChange(false);
                            }}
                        >
                            <LuMaximize2 className="size-full" />
                        </Button>:
                        <Button
                            size={"icon"}
                            className="hover:text-gray-400 size-6 bg-transparent hover:bg-transparent"
                            onClick={() => {
                                setMinimized(true);
                                onMinimizeChange(true);
                            }}
                        >
                            <LuMinimize2 className="size-full" />
                        </Button>
                }
                <Button
                    size={"icon"}
                    className="size-7 hover:text-red-500 bg-transparent hover:bg-transparent"
                    onClick={() => onClose()}
                >
                    {icons.close("size-full")}
                </Button>
            </motion.div>
            <AnimatePresence initial={true}>
                {
                    !minimized &&
                        <>
                            <motion.div 
                                initial={{ flexGrow: 0 }}
                                animate={{ flexGrow: 1 }}
                                exit={{ flexGrow: 0 }}
                                className="flex flex-col"
                            >
                                {children}
                            </motion.div>
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "1rem", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-black h-4 rounded-b-2xl w-full"
                            ></motion.div>
                        </>
                }
            </AnimatePresence>
        </div>
    );
}
