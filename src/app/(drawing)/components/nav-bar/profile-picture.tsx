"use client"
import { useProfileStore } from "@/app/(drawing)/stores/profile";
import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

export const ProfilePicture = () => {
    const profile = useProfileStore((state) => state.profile);

    return (
        <div className="rounded-full size-7">
            {
                // !profile.image ? 
                //     <Image src={profile.image} fill style={{ objectFit: "cover" }} sizes="100%" alt="profile photo" />
                // :
                    <VscAccount className="size-full"/>
            }
        </div>
    );
}
