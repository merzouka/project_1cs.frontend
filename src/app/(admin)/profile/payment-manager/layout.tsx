import { PaymentManagerNavBar } from "@/app/(admin)/(payment)/components/nav-bar";
import { ManagerLayout } from "@/app/(admin)/components/manager-layout";


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ManagerLayout navBar={<PaymentManagerNavBar />}>
            {children}
        </ManagerLayout> 
    );
}

export default ProfileLayout;
