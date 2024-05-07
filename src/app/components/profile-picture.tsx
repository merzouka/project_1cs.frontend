"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";

export const ProfilePicture = ({ className }: { className?: string }) => {
    const { user } = useUser();

    return (
        <Button 
            className={cn(
                "flex gap-x-2 group",
                "bg-transparent hover:bg-transparent rounded-full size-10",
                className
            )}
            size={"icon"}
        >
            <Link href="/profile">
                {
                    user.image ? 
                        <Image src="/logo.svg" fill style={{ objectFit: "cover" }} sizes="100%" alt="user photo" />
                        :
                        <VscAccount className="size-8 text-black hover:text-orange-400"/>
                }
            </Link>
        </Button>
    );
}
