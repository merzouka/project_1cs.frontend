import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const PhoneInputSkeleton = () => {
    return (
        <div className={cn(
            "w-full max-w-[33rem]",
        )}>
            <div className="w-full flex justify-between items-center pe-2">
                <label className="text-sm font-medium mb-2">{"Téléphone"}</label>
            </div>
            <div className={cn(
                "flex rounded-xl w-full focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 mb-2",
            )}>
                <Skeleton 
                    className="max-w-[33rem] w-full border border-slate-200 h-11 rounded-2xl"
                />
            </div>    
        </div>
    );
}
