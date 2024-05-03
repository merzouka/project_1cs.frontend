import { Landmark } from "./landmark";
import { ProgressBar } from "./progress-bar";
import { MobileStage } from "./mobile-stage";

export interface Step {
    id: string;
    status: boolean | null;
    icon: (className?: string) => React.ReactNode;
    display: string;
}

export const Progress = ({ steps }: { steps: Step[] }) => {
    return (
        <div className="w-11/12 relative flex flex-col gap-y-6 h-full md:h-fit pt-8 md:pt-0">
            <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 w-full">
                <ProgressBar steps={steps}/>
                <div className="w-full flex items-center justify-between">
                    {
                        steps.map((step, i) => (
                            <Landmark key={step.id} step={step} above={i % 2 == 0}/>
                        ))
                    }
                </div>
            </div>
            <MobileStage steps={steps} />
        </div>
    );
}
