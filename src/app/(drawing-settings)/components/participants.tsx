"use client";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="flex items-center border border-slate-100 rounded-lg px-2 
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 mb-2 md:mb-4
            shadow-lg shadow-slate-200
            ">
            <LuSearch className="size-7 text-slate-400" onClick={() => inputRef.current?.focus()}/>
            <Input 
                ref={inputRef}
                className="w-full border-0 focus-visible:ring-0 focus-within:ring-transparent focus-within:ring-offset-0"
                placeholder="Rechercer"
            />
        </div>
    );
}

export const Participants = () => {
    return (
        <div className="flex flex-col size-full">
            <SearchBar />
            <div className="relative grow">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-200 overflow-y-auto">
                    <div className="h-dvh"></div>
                </div>
            </div>
        </div>
    );
}
