"use client";

import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function ProfilePage({
    params
    }: {
        params: {
            id: number;
        }
    }) {
    const { isLoggedIn } = useUser();
    const { user } = useUser();
    console.log(user);
    const router = useRouter();
    if (!isLoggedIn) {
        router.push("/login");
    }
    return (
        <div>{params.id}</div>
    );
}
