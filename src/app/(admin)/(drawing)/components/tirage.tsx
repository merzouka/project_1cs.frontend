"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { SearchBar } from "@/app/components/search-bar";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@/components/ui/button";
import { DrawingDisplay } from "./drawing-display";


const Tirage = () => {
    const [term, setTerm] = useState<string>("");
    const [end, setEnd] = useState(false);
    const [displayed, setDisplayed] = useState(0);

    const handleSearch = useDebouncedCallback((value: string) => {
        setTerm(value)
    }, 500);
    

    const handleButtonClick = () => {
        setDisplayed(displayed + 1);
    }

    return (
        <div className="w-full h-full flex flex-col items-stretch justify-center">
            <div className="flex items-center w-full gap-x-2 justify-center relative mb-1 md:mb-4">
                <SearchBar onChange={handleSearch} className="flex-grow md:mb-0"/>
                <Button
                    className={cn(
                        "bg-white text-orange-500 border border-orange-500 rounded-full ",
                        "hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors",
                        "md:absolute md:right-0 md:-top-20 font-bold"
                    )}
                    onClick={handleButtonClick}
                    disabled={end}
                >
                    {"Mélanger"}
                </Button>
            </div>
            <DrawingDisplay term={term} setEnd={setEnd} displayed={displayed} />
        </div>
    );
};

export default Tirage;
