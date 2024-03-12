"use client";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";
import { Country, countries } from "@/constants/countries";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { cn } from "@/lib/utils";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export default function CountrySelect({ 
    onChange,
    defaultValue,
    disabled,
    className,
    }: {
        onChange?: (arg0: any) => void;
        defaultValue?: string;
        disabled?: boolean;
        className?: {
            trigger?: string,
            content?: string,
        };
    }) {
    const [term, setTerm] = useState('');
    const onValueChange = useDebouncedCallback((value: string) => setTerm(value), 900);

    return (
        <Select disabled={disabled} onValueChange={onChange} defaultValue={defaultValue}>
            <SelectTrigger className={className?.trigger}>
                <SelectValue placeholder={
                    <IconCountry 
                        country={{
                            alpha2: "DZ",
                            code: "213",
                            alpha3: "",
                            name: "Algeria",
                        }}
                    />
                }/>
            </SelectTrigger>
            <SelectContent className={cn(
                "p-1",
                className?.content
            )}>
                <Input 
                    className="mb-2"
                    onChange={(e) => onValueChange(e.target.value)} 
                    placeholder="Search..." defaultValue={term}
                />
                {
                    countries.filter((country) => country.name.toLowerCase().includes(term)).map((country) => {
                        return (
                            <SelectItem  key={`${country.code}${country.alpha2}`} value={`+${country.code}`}>
                                <IconCountry country={country} />
                            </SelectItem>
                        );
                    })
                }
            </SelectContent>
        </Select>
    );
}

function IconCountry({ country }: { country: Country }) {
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
