"use client";
import { Users } from "./users";
import { useState } from "react";
import {
    Pagination,
    PaginationItem,
    PaginationContent,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

export const UsersDisplay = () => {
    const params = useSearchParams();

    return (
        <div className="flex flex-col items-stretch justify-stretch w-full h-full">
            <Users />
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>{params.get('page') || "1"}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
