import { DoctorNavBar } from "@/app/(admin)/(appointment)/components/nav-bar";
import { ManagerLayout } from "@/app/(admin)/components/manager-layout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ManagerLayout navBar={<DoctorNavBar />}>
            {children}
        </ManagerLayout> 
    );
}
