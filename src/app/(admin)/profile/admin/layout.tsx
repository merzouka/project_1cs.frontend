import { AdminNavBar } from "@/app/(admin)/(management)/components/nav-bar";
import { ManagerLayout } from "@/app/(admin)/components/manager-layout";


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ManagerLayout navBar={<AdminNavBar />}>
            {children}
        </ManagerLayout> 
    );
}

export default ProfileLayout;
