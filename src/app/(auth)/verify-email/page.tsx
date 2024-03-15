"use client";
import { Toaster } from "@/components/ui/toaster";
import SideBanner from "@/app/(auth)/components/side-banner";
import Logo from "@/components/ui/logo";
import { useUserStore } from "@/stores/user-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { verifyEmail } from "../actions/credentials";

export default function VerifyEmailPage() {
    const id = useUserStore((state) => state.id);
    const router = useRouter();
    // if (!id) {
    //     router.push("/login");
    // }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center h-dvh p-3">
                <main className="flex jusitfy-center items-center">
                    <div className="flex flex-col">
                        <Logo />
                        <div className="flex-grow max-h-12"></div>
                    </div>
                </main>
                <SideBanner />
            </div>
            <Toaster />
        </div>
    );
}
