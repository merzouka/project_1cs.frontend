import { AdminProfileForm } from "@/app/components/profile-form-admin";
import { Pages } from "@/constants/pages";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
    return (
         <div className="w-full h-full overflow-y-scroll relative">
            <div className="absolute top-0 right-0 left-0 bottom-0 p-3 md:p-5 md:pt-7">
                <h1 
                    className={cn(
                        "text-3xl text-gray-500 font-semibold",
                    )}
                >
                    {"Détails de comptes"}
                </h1>
                <AdminProfileForm page={Pages.paymentManangerProfile} />
            </div>
        </div>
    );
}

export default ProfilePage;
