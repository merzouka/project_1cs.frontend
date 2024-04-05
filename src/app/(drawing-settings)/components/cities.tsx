"use client";

import { useUser } from "@/hooks/use-user";

export const Citites = () => {
    const { user } = useUser();
    

    return (
        <p className="text-slate-400">
            {`Les communes concernées sont:`}
        </p>
    );
}
