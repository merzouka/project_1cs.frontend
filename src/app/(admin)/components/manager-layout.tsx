import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";

export const ManagerLayout = ({ navBar, children }: { navBar: React.ReactNode, children: React.ReactNode }) => {
    return (
        <div className="flex items-center h-dvh">
            {navBar}
            <Separator orientation="vertical" className="h-[80dvh] hidden md:block" />
            <div className="size-full h-dvh">
                {children}
            </div>
            <Toaster />
        </div>
    );
}
