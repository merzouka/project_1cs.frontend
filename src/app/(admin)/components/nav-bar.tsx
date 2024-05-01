import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { UserPopup } from "./user-popup";
import { Tab } from "./nav-tabs";

export const NavBar = ({ tabs, profileLink }: { tabs: Tab[], profileLink: string }) => {
    return (
        <>
            <div className="absolute top-3 right-2 lg:top-8 lg:right-7 md:w-fit  z-[11]">
                <UserPopup />
            </div>
            <MobileNav tabs={tabs} profileLink={profileLink} />
            <DesktopNav tabs={tabs} profileLink={profileLink} />
        </>
    );
}

