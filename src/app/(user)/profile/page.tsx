"use client";

import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import Link from "next/link";

export default function ProfilePage() {
    const { validateAccess } = useUser();
    // validateAccess(Pages.profile);
    return (
        <div>
            <p><Link href="/inscription">Registration</Link></p>
            <p><Link href="/drawing/settings">Drawing Settings</Link></p>
            <p><Link href="/drawing">Drawing</Link></p>
        </div>
    );
}
