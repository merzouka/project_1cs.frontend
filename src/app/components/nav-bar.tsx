import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export const NavBar = ({ className }: { className?: string }) => {
    return (
        <>
            <DesktopNav className={className} />
            <MobileNav />
        </>
    );
}
