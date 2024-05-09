"use client";
import { cn } from "@/lib/utils";
import { ProfilePicture } from "./profile-picture";
import { Logout } from "./logout";

export const User = ({className}: { className?: string }) => {

    return (
        <div className={cn(
            "relative size-8 flex items-center justify-center group cursor-pointer mr-5 md:mr-0",
            className
        )}>
            <ProfilePicture className="absolute z-[1] top-0 left-0 transition-all group-hover:transition-all
                group-hover:-translate-x-1/2 size-10 bg-white"/>
            <Logout className="absolute top-0 left-0 group-hover:translate-x-1/2
                transition-all group-hover:transition-all" />
        </div>
    );
}
