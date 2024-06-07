"use client";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { countries } from "@/constants/countries";
import { Input } from "@/components/ui/input";
import { Suspense, lazy, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { cn } from "@/lib/utils";
import { IconCountry } from "./countries-list";
import { Loader } from "lucide-react";

const Countries = lazy(() => import("./countries-list"));

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
        <Select disabled={disabled} onValueChange={(value) => {if (onChange) onChange(`+${countries[Number(value)].code}`)}} defaultValue={defaultValue}>
            <SelectTrigger className={cn(
                className?.trigger,
                "focus-visible:ring focus-visible:ring-blue-300 focus-visible:ring-offset-0"
            )}>
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
                <Suspense fallback={
                    <div className="flex justify-center items-center">
                        <Loader className="w-10 h-10 lg:w-15 lg:h-15 animate-spin m-2"/>
                    </div>
                }>
                    <Countries term={term}/>
                </Suspense>
            </SelectContent>
        </Select>
    );
}

