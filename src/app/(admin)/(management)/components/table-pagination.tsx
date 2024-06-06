"use client";
import {
    Pagination,
    PaginationItem,
    PaginationContent,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export const TablePagination = (
    {
        previous,
        next,
    } :{
        previous: string | null;
        next: string | null;
    }
) => {
    const params = useSearchParams();

    return (
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious className={cn(
                            previous === null && "hover:bg-transparent hover:text-slate-300 text-slate-300 hover:cursor-default"
                        )} href={`/roles?${(new URL(previous || 'http://localhost:8000')).searchParams.toString()}` || undefined} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>{params.get('page') || "1"}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext className={cn(
                            next === null && "hover:bg-transparent hover:text-slate-300 text-slate-300 hover:cursor-default"
                        )} href={`/roles?${(new URL(next || 'http://localhost:8000')).searchParams.toString()}` || undefined} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
    );
}
