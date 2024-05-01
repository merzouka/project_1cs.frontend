import { DoctorNavBar } from "@/app/(admin)/(appointment)/components/nav-bar";
import { ManagerLayout } from "@/app/(admin)/components/manager-layout";


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ManagerLayout navBar={<DoctorNavBar />}>
            {children}
        </ManagerLayout> 
    );
}

export default ProfileLayout;
