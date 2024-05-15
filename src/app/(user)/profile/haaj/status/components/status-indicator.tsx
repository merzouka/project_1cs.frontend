import { FaCircleCheck } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { cn } from "@/lib/utils";

export const StatusIndicator = ({ status }: { status: boolean | null }) => {
    const styles = "size-6 bg-white";
    switch (status) {
        case true:
            return <FaCircleCheck className={cn(
                styles,
                "text-emerald-400",
            )} />
        case false:
            return <AiFillCloseCircle className={cn(
                styles,
                "text-red-400",
            )}/>
        default:
            return <FaCircleCheck className={cn(
                styles,
                "text-gray-300",
            )} />
    }
}
