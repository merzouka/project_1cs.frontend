import { Step } from "./progress";
import { cn } from "@/lib/utils";
import { StatusIndicator } from "./status-indicator";

export const Landmark = ({ step, above }: { step: Step, above: boolean }) => {
    let color;
    switch (step.status) {
        case false:
            color = "text-red-400";
            break;
        case true:
            color ="text-emerald-400";
            break;
        default:
            color = "text-gray-300";
            break;
    }

    return (
        <div className="relative">
            <div className={cn(
                "absolute hidden md:flex flex-col gap-y-2 items-center justify-center max-w-24 left-1/2 -translate-x-1/2",
                above ? "bottom-4" : "top-4",
            )}>
                {step.icon(cn(
                    color,
                    "size-8"
                ))}
                <p className={cn(
                    color,
                    "text-center"
                )}>{step.display}</p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <StatusIndicator status={step.status} />
            </div>
        </div>
    );
}
