import { DrawingNavBar } from "@/app/(admin)/(drawing)/components/nav-bar";
import { ManagerLayout } from "@/app/(admin)/components/manager-layout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ManagerLayout navBar={<DrawingNavBar />}>
            {children}
        </ManagerLayout> 
    );
}
