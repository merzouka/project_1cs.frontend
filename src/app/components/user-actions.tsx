"use client";
import Link from "next/link";
// import { useUser } from "@/hooks/use-user";
import { UserPopup } from "./user-popup";
import { Button } from "@/components/ui/button";

export const UserActions = () => {
    // const { user } = useUser();
    return (
        <div>
            {
                // user.id ?
                false?
                    <UserPopup /> :
                    <div className="flex gap-x-2 relative">
                        <Button className="hidden md:block text-black hover:text-orange-400 font-bold text-sm bg-transparent hover:bg-transparent">
                            <Link href="/register" className="w-full h-full flex items-center">
                            {"S'inscrire"}
                            </Link>
                        </Button>
                        <Button className="rounded-full bg-black hover:bg-black/75 font-bold flex">
                            <Link href="/login" className="w-full h-full flex items-center">
                                {"Se connecter"}
                            </Link>
                        </Button>
                    </div>
            }
        </div>
    );
}
