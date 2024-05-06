"use client";
import Link from "next/link";
// import { useUser } from "@/hooks/use-user";
import { User } from "./user";
import { Button } from "@/components/ui/button";

export const UserActions = () => {
    // const { user } = useUser();
    return (
        <div className="md:absolute md:top-6 md:right-10">
            {
                // user.id ?
                false?
                    <User /> :
                    <div className="flex gap-x-2 relative">
                        <Button className="text-black hover:text-orange-400 text-xs md:text-sm
                            font-bold bg-transparent hover:bg-transparent">
                            <Link href="/register" className="w-full h-full flex items-center">
                                <span className="hidden md:block">{"S'inscrire"}</span>
                            </Link>
                        </Button>
                        <Button 
                            className="hidden md:flex rounded-full text-white hover:text-white md:bg-black hover:bg-orange-400 font-bold " 
                            size={"default"}
                        >
                            <Link href="/login" className="w-full h-full flex items-center">
                                {"Se connecter"}
                            </Link>
                        </Button>
                        <Button className="md:hidden rounded-full bg-transparent text-orange-400 hover:text-orange-600
                            hover:bg-transparent font-bold" size={"sm"}>
                            <Link href="/login" className="w-full h-full flex items-center">
                                {"Se connecter"}
                            </Link>
                        </Button>
                    </div>
            }
        </div>
    );
}
