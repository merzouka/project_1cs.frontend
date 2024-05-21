"use client";
import Link from "next/link";
import { BiLoaderAlt } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { useUser } from "@/hooks/use-user";
import { User } from "./user";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "@/config/axios";
import { endpoints } from "@/constants/endpoints";
import { getUrl } from "@/constants/api";
import { motion, AnimatePresence } from "framer-motion";
import { fade } from "@/constants/animations";

export const UserActions = () => {
    const { user } = useUser();
    const { isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.currentUser));
                const data = response.data;
                return data;
            } catch (error) {
                throw new Error("error");
            }
        }
    });

    return (
        <div className="md:absolute md:top-5 md:right-10 min-w-24 flex justify-center items-center">
            {
                isLoading ? <Spinner /> :
                    <AnimatePresence initial={true}>
                        {
                            user.isLoggedIn ?
                                <User /> :
                                <motion.div 
                                    {...fade}
                                    className="flex gap-x-2 relative"
                                >
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
                                </motion.div>

                        }
                    </AnimatePresence>
            }
        </div>
    );
}

function Spinner({ className }: { className?: string }) {
    return (
        <BiLoaderAlt className={cn(
            "animate-spin size-10",
            className
        )}/>
    )
}
