import { NavTabs, Tab } from "./nav-tabs";
import { Actions } from "./actions";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export const DesktopNav = ({ profileLink, tabs }: { profileLink: string; tabs: Tab[] }) => {
    return (
        <>
            <div className="size-16 p-3 hidden lg:block absolute top-2 left-3 z-[11] rounded-full md:top-4 md:left-5">
                <Logo size={"small"}/>
            </div>
            <nav
                className={cn(
                    "absolute lg:static z-[10] h-dvh top-0 w-full lg:w-80 items-center hidden lg:flex",
                    "flex-col justify-between pt-24 pb-2 md:pb-8 bg-white"
                )}
            >
                <div className="w-full">
                    <NavTabs tabs={tabs} />
                </div>
                <div className="w-full">
                    <Actions profileLink={profileLink} />
                </div>
            </nav>
        </>
    );
}
