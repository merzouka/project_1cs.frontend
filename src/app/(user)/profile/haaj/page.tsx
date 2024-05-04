"use client";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { ProfileForm } from "../components/profile-form";

export default function ProfilePage() {
    const { validateAccess } = useUser();
    // validateAccess(Pages.profile);
    return (
        <div className="p-5 w-full h-full">
            <h1 
                className={cn(
                    "text-3xl text-gray-500 font-semibold",
                )}
            >
                {"Détails de comptes"}
            </h1>
            <ProfileForm />
        </div>
    );
}
