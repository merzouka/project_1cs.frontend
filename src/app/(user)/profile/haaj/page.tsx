"use client";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { ProfileForm } from "@/app/components/profile-form";

export default function ProfilePage() {
    const { validateAccess } = useUser();
    // validateAccess(Pages.profile);
    return (
        <div className="w-full h-full relative">
            <div className="p-5 w-full h-full overflow-scroll absolute top-0 right-0 left-0 bottom-0">
                <h1 
                    className={cn(
                        "text-3xl text-gray-500 font-semibold",
                    )}
                >
                    {"Détails de comptes"}
                </h1>
                <ProfileForm page={Pages.haajProfile} />
            </div>
        </div>
    );
}
