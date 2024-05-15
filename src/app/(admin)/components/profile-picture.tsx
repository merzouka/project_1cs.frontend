"use client";
import { useUser } from "@/hooks/use-user";
import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

export const ProfilePicture = () => {
    const { user } = useUser();

    return (
        <div className="rounded-full size-7 relative">
            {
                user.image ? 
                    <Image 
                        src={user.image} fill 
                        style={{ objectFit: "cover" }} 
                        sizes="10vw" 
                        className="w-full h-full rounded-full"
                        alt="user photo" 
                    />
                    :
                    <VscAccount className="size-full"/>
            }
        </div>
    );
}
