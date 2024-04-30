"use client";

import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import Link from "next/link";

export default function ProfilePage({
    params
    }: {
        params: {
            id: number;
        }
    }) {
    const { validateAccess } = useUser();
    validateAccess(Pages.profile);
    return (
        <div>
            <p>{params.id}</p>
            <Link href="/inscription">Registration</Link>
            <Link href="/drawing/settings">Drawing Settings</Link>
            <Link href="/drawing">Drawing</Link>
        </div>
    );
}
