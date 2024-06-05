import { Step } from "./progress"
import { cn } from "@/lib/utils";

export const ProgressBar = ({ steps }: { steps: Step[] }) => {
    return (
        <div className="absolute top-1/2 -translate-y-1/2 h-0.5 w-full flex items-center justify-center">
            {
                steps.map((step, i) => (
                    i != steps.length - 1 ?
                        <div key={step.id} className={cn(
                            step.status && steps[i + 1].status ? "bg-emerald-400" :
                                steps[i + 1].status == null ? "bg-gray-300" : "bg-red-400",
                            "h-0.5 grow"
                        )}></div>:
                        <></>
                ))
            }
        </div>
    );
}
