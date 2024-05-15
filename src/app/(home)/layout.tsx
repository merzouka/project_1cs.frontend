
import React from "react";
import { NavBar } from "../components/nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full">
            <NavBar />
            {children}
        </div>
    );
}

export default Layout;
