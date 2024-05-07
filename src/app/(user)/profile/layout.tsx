import { NavBar } from "@/app/components/nav-bar";
import { EmailVerification } from "./components/email-verification";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-dvh flex flex-col">
            <NavBar className="drop-shadow-sm" />
            <div className="w-full relative z-[9999]">
                <EmailVerification />
            </div>
            {children}
        </div>
    );
}

export default Layout; 
