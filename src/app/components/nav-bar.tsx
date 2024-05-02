import Logo from "@/components/ui/logo";
import { NavItems } from "./nav-items";
import { UserActions } from "./user-actions";

export const NavBar = () => {
    return (
        <div className="flex justify-around items-center w-full py-3 px-12">
            <Logo size="small" className="relative"/>
            <NavItems />
            <UserActions />
        </div>
    );
}
