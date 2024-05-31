import { SearchBar } from "@/app/components/search-bar";
import { useState } from "react";

export const Filter = (
    {
        onQueryChange,
    }:{
        onQueryChange: (params: URLSearchParams) => void;
    }
) => {
    const [searchParams, setSearchParams] = useState(new URLSearchParams());

    return( 
        <div className="w-full flex items-center">
            <SearchBar onChange={(value) => {
                searchParams.set("search", value);
                onQueryChange(searchParams);
            }} className="flex-grow"/>
        </div>
    );
}
