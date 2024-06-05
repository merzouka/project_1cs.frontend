import { DesktopNavList } from "./desktop-nav-list";
import Logo from "@/components/ui/logo";
import { UserActions } from "./user-actions";
import { cn } from "@/lib/utils";

export const DesktopNav = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            "hidden md:flex justify-around items-center w-full py-3 px-12 h-[5.5rem] relative mb-2 bg-white flex-shrink-0",
            className
        )}>
            <Logo size="small" className="hidden md:block absolute top-1 left-10"/>
            <DesktopNavList />
            <UserActions />
        </div>
    );
}
