import React from "react";
import { UsersDisplay } from "../components/users-display";

const Page = () => {
    return (
        <div className="px-2 md:px-4 py-6 pb-8 flex w-full h-full flex-col relative">
            <div className="w-full pt-3 mb-2 md:mb-6">
                <h4 className="px-4 text-left border-b-0 text-gray-800 text-[28px] font-semibold">
                    Les Utilisateurs
                </h4>
            </div>
            <div className="px-4 flex-grow flex">
                <UsersDisplay />
            </div>
        </div>
    );
};

export default Page;
