import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ProfilePicture } from "./profile-picture";
import { useProfileStore } from "@/app/(drawing-settings)/stores/profile";
import { ProfileActions } from "./profile-actions";

export const UserPopup = ({className}: { className?: string }) => {
    const profile = useProfileStore((state) => state.profile);

    return (
        <Popover>
            <PopoverTrigger className={cn(
                "flex gap-x-2 size-full",
                className,
            )}>
                <ProfilePicture />
                <span className="hidden lg:block">{`${profile.firstName} ${profile.lastName}`}</span>
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <ProfileActions />
            </PopoverContent>
        </Popover>
    );
}
