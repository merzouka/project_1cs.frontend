import { cn } from "@/lib/utils";

export interface Step {
    id: string;
    status: boolean | null;
    icon: (className?: string) => React.ReactNode;
    display: string;
}

export const Progress = ({ steps }: { steps: Step[] }) => {
    return (
        <div className="w-full relative">
            <div className="absolute top-1/2 translate-y-1/2 h-0.5 bg-black w-full"></div>
            <div className="absolute top-1/2 translate-y-1/2">
            </div>
        </div>
    );
}
