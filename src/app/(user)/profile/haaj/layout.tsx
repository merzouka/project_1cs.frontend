import { Separator } from "@/components/ui/separator";
import { SideBar } from "./components/side-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:pt-5 h-full">
            <SideBar />
            <Separator orientation="vertical" className="hidden h-5/6 md:block mx-3"/>
            {children}
        </div>
    );
}

export default Layout; 
