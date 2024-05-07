import { cn } from "@/lib/utils";
import { Step } from "./progress";

export const MobileStage = ({ steps }: { steps: Step[] }) => {
    const firstUndone = steps.find((step) => !step.status);
    const color = firstUndone?.status == null ? "text-gray-300" : "text-red-400";
    return (
        <div className="md:hidden flex flex-col items-center justify-center gap-y-3 grow">
            {firstUndone?.icon(`${color} size-4/12`)}
            <p className={cn(
                color,
                "font-bold text-xl"
            )}>
                {firstUndone?.display}
            </p>
        </div>
    );
}
