import { UserProfileForm } from "@/app/components/profile-form-user";
import { Pages } from "@/constants/pages";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
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
                <UserProfileForm page={Pages.profile} />
            </div>
        </div>
    );
}
