import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { cn } from "@/lib/utils";

export interface ProcessData {
    text: string;
    updated: boolean;
    clear: boolean;
    status: boolean | null;
    id: number;
}

export const Process = ({ status, text, updated = false }: { status: boolean | null; text: string; updated?: boolean; }) => {
    // TODO remove border styles from parent element
    return (
        <div className={cn(
            "flex items-center justify-center bg-white text-black w-full p-3 gap-x-2",
            status === null && "text-slate-400"
        )}>
            <div className={cn(
                "size-2 bg-transparent rounded-full mr-1 min-w-2",
                updated && "bg-orange-400"
            )}></div>
            <p className="flex-grow text-wrap font-medium text-sm">{text}</p>
            <div className={cn(
                "size-4 ring-2 rounded-full ring-offset-1 ring-transparent min-w-4",
                status === null ? "ring-slate-300" : (status === false ? "ring-red-400" : "ring-emerald-400"),
            )}>
                {
                    status === null ?
                        <IoIosCloseCircle className="size-full text-transparent" />:
                        (status === true ?
                            <FaCheckCircle className="size-full text-emerald-600" />:
                            <IoIosCloseCircle className="size-full text-red-400" />
                        )
                }
            </div>
        </div>
    );
}
