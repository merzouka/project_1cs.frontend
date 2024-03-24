import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon } from "lucide-react";

import { useState, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function InputCalendar({
    value,
    onChange,
    disabled,
    styles,
    }: {
        value: Date | undefined;
        onChange: ((value: Date | undefined) => void);
        disabled?: boolean;
        styles?: {
            button?: string;
            search?: string;
            calendar?: string;
        };
    }) {
    const dateRef = useRef<HTMLInputElement>(null);
    const [dateInput, setDateInput] = useState<string | undefined>(format(value || new Date(), "yyyy-MM-dd"));
    const onDateInput = useDebouncedCallback(
        (value: string) => {
            const date = new Date(value);
            if (date.toString() !== "Invalid Date") {
                onChange(date);
            }
        },
        500
    );

    return (
        <Popover>
            <PopoverTrigger className="block w-full" asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "flex gap-x-1 justify-between items-center w-full rounded-full pe-4 ",
                        "bg-transparent border-slate-300 hover:bg-transparent hover:border-slate-800",
                        !value && "text-gray-400 font-normal",
                        styles?.button,
                    )}
                    onClick={() => dateRef.current?.focus()}
                >
                    <span className="">
                        {value ? format(value, "yyyy-MM-dd") : "Votre date de naissance"}
                    </span>
                    <CalendarIcon 
                        onClick={() => dateRef.current?.focus()}
                        className={cn(
                            "p-[0.16rem]",
                            disabled ? "text-gray-200" : ""
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="
                flex flex-col items-center justify-center
                w-auto"
            >
                <Input 
                    placeholder="YYYY-MM-DD"
                    className={cn(
                        "w-full border rounded-lg",
                        styles?.search,
                    )}
                    ref={dateRef}
                    disabled={disabled}
                    onChange={(e) => {
                        onDateInput(e.target.value);
                        setDateInput(e.target.value);
                    }}
                    value={dateInput}
                />
                <Calendar
                    mode="single"
                    selected={value}
                    month={value}
                    onMonthChange={(date) => {
                        setDateInput(format(date, "yyyy-MM-dd"));
                        onChange(date);
                    }}
                    onSelect={(date) => {
                        setDateInput(date ? format(date, "yyyy-MM-dd") : "");
                        onChange(date);
                    }}
                    initialFocus
                    disabled={(date) => {
                        return date > new Date();
                    }}
                    className={cn(
                        styles?.calendar,
                    )}
                />
            </PopoverContent>
        </Popover>
    );
}
