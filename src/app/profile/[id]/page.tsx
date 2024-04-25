"use client";

import { useUser, Page } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage({
    params
    }: {
        params: {
            id: number;
        }
    }) {
    const { isLoggedIn, validateAccess } = useUser();
    useEffect(() => {
        validateAccess(Page.profile);
    }, [])
    const router = useRouter();
    if (!isLoggedIn) {
        router.push("/login");
    }
    return (
        <div>{params.id}</div>
    );
}
