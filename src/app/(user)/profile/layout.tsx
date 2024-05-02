import { NavBar } from "@/app/components/nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-dvh flex flex-col">
            <NavBar className="drop-shadow-sm" />
            {children}
        </div>
    );
}

export default Layout; 
