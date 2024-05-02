import Logo from "@/components/ui/logo";
import { NavItems } from "./nav-items";
import { UserActions } from "./user-actions";

export const NavBar = () => {
    return (
        <div className="flex justify-around items-center w-full py-3 px-12 h-20 relative mb-2">
            <Logo size="small" className="hidden md:block absolute top-3 left-10"/>
            <Logo size="xs" className="md:hidden absolute top-5 left-5"/>
            <NavItems />
            <UserActions />
        </div>
    );
}
