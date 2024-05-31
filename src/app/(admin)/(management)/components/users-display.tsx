"use client";
import { Users } from "./users";
import { useState } from "react";

export const UsersDisplay = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="flex flex-col items-stretch justify-stretch w-full h-full">
            <Users />
        </div>
    );
}
