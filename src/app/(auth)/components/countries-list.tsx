"use client";
import { cn } from "@/lib/utils";
import ReactCountryFlag from "react-country-flag";
import { Country, countries } from "@/constants/countries";
import { SelectItem } from "@/components/ui/select";
import { useMemo } from "react";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export default function CountriesList({ term }: { term: string }) {
    const countriesList = useMemo(
        () => 
            countries.filter((country) => country.name.toLowerCase().includes(term))
            .map((country, index) => {
                return (
                    <SelectItem  key={`${country.alpha2}${country.code}`} value={`${index}`}>
                        <IconCountry country={country} />
                    </SelectItem>
                );
            })
            ,
        [term]
    )
    return (
        <>
            {countriesList}
        </>
    );

}

export function IconCountry({ country }: { country: Country }) {
    return (
        <div className={cn(
            "flex justify-center items-center gap-x-2",
            montserrat.className
        )}>
            <ReactCountryFlag countryCode={country.alpha2}/>
            <p className="text-[0.81rem]">{`+${country.code}`}</p>
        </div>
    );
}

function TextCountry({ country }: { country: Country }) {
    return (
        <div className={cn(
            "flex justify-center items-center gap-x-2",
            montserrat.className
        )}>
            <p>{country.alpha2}</p>
            <p className="text-xs">{`+${country.code}`}</p>
        </div>
    );
}
