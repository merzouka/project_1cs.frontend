import { AdminNavBar } from "@/app/(admin)/(management)/components/nav-bar";
import { ManagerLayout } from "@/app/(admin)/components/manager-layout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ManagerLayout navBar={<AdminNavBar />}>
            {children}
        </ManagerLayout> 
    );
}
