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
    className,
    }: {
        value: Date;
        onChange: ((value: Date | undefined) => void);
        disabled?: boolean;
        className: {
            button?: string;
            search?: string;
            calendar?: string;
        };
    }) {
    const dateRef = useRef<HTMLInputElement>(null);
    const [date, setDate] = useState(new Date());
    const [dateInput, setDateInput] = useState<string | undefined>(undefined);
    const [month, setMonth] = useState(new Date());
    const onDateInput = useDebouncedCallback(
        (value: string) => {
            const date = new Date(value);
            if (date.toString() !== "Invalid Date") {
                setDate(date);
                setMonth(date);
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
                        "bg-transparent hover:bg-transparent hover:border-slate-800",
                        !value && "text-gray-400 font-normal",
                        className?.button,
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
                        className?.search,
                    )}
                    ref={dateRef}
                    disabled={disabled}
                    onChange={(e) => {
                        setDateInput(e.target.value);
                        onDateInput(e.target.value);
                    }}
                    value={dateInput}
                />
                <Calendar
                    mode="single"
                    selected={date}
                    month={month}
                    onMonthChange={(date) => {
                        setDateInput(format(date, "yyyy-MM"));
                        setMonth(date);
                    }}
                    onSelect={(date) => {
                        if (date) {
                            setDateInput(format(date, "yyyy-MM-dd"));
                            setDate(date);
                        }
                        onChange(date);
                    }}
                    initialFocus
                    disabled={(date) => {
                        return date > new Date();
                    }}
                    className={cn(
                        className?.calendar,
                    )}
                />
            </PopoverContent>
        </Popover>
    );
}
