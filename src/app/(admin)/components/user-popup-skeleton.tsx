import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
export const UserPopupSkeleton = () => {
    return (
        <div>
            <Skeleton className={cn(
                "flex gap-x-2 size-full",
                "bg-slate-100 rounded-lg p-2 items-center",
            )}>
                <Skeleton className="size-7 rounded-full bg-slate-200"/>
                <Skeleton className="h-3 w-16 bg-slate-200" />
            </Skeleton>
        </div>
    );
}
