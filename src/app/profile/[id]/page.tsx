"use client";

import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
        <div>
            <p>{params.id}</p>
            <Link href="/inscription">Registration</Link>
        </div>
    );
}
