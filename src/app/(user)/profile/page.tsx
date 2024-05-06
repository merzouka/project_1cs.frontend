"use client";
import { ProfileForm } from "./components/profile-form";

import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
    const { validateAccess } = useUser();
    // validateAccess(Pages.profile);
    return (
        <div className="w-full h-full overflow-y-scroll relative">
            <div className="absolute top-0 right-0 left-0 bottom-0 p-3 md:p-5">
                <h1 
                    className={cn(
                        "text-3xl text-gray-500 font-semibold",
                    )}
                >
                    {"Détails de comptes"}
                </h1>
                <ProfileForm />
            </div>
        </div>
    );
}
