"use client";
import Link from "next/link";
// import { useUser } from "@/hooks/use-user";
import { UserPopup } from "./user-popup";
import { Button } from "@/components/ui/button";

export const UserActions = () => {
    // const { user } = useUser();
    return (
        <div className="absolute top-5 right-2 md:top-5 md:right-10">
            {
                // user.id ?
                false?
                    <UserPopup /> :
                    <div className="flex gap-x-2 relative">
                        <Button className="text-black hover:text-orange-400 text-xs md:text-sm
                            font-bold bg-transparent hover:bg-transparent">
                            <Link href="/register" className="w-full h-full flex items-center">
                                <span className="hidden md:block">{"S'inscrire"}</span>
                            </Link>
                        </Button>
                        <Button className="rounded-full bg-transparent text-orange-400 hover:text-orange-600
                            hover:bg-transparent md:text-white md:hover:text-white
                            md:bg-black md:hover:bg-orange-400 font-bold flex
                            " size={"sm"}>
                            <Link href="/login" className="w-full h-full flex items-center">
                                {"Se connecter"}
                            </Link>
                        </Button>
                    </div>
            }
        </div>
    );
}
