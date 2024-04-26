"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ProfilePicture } from "./profile-picture";
import { useProfileStore } from "@/app/(drawing)/stores/profile";
import { ProfileActions } from "./profile-actions";
import { IoIosArrowDown } from "react-icons/io";
import { Poppins } from "next/font/google";
import { useUser } from "@/hooks/use-user";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const UserPopup = ({className}: { className?: string }) => {
    const { user } = useUser();

    return (
        <Popover>
            <PopoverTrigger className={cn(
                "flex gap-x-2 size-full",
                "hover:bg-slate-100 rounded-lg p-2 items-center",
                className,
            )}>
                <ProfilePicture />
                <span className={cn(
                    "hidden md:block",
                    poppins.className,
                )}>
                    {user.firstName != "" ? `${user.firstName} ${user.lastName}`: "User"}
                </span>
                <IoIosArrowDown className="hidden md:block" />
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <ProfileActions/>
            </PopoverContent>
        </Popover>
    );
}
