import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";

export const SearchBar = ({ onChange, className }: { onChange: (value: string) => void; className?: string }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string | undefined>(undefined);
    const handleChange = useDebouncedCallback((value: string) => {
        onChange(value);
    }, 500);

    return (
        <div className={cn(
            "flex items-center border border-slate-100 rounded-lg px-2 focus-within:ring-2",
            "focus-within:ring-black focus-within:ring-offset-2 mb-2 md:mb-4",
            "shadow-md shadow-slate-200",
            className
        )}>
            <LuSearch className="size-7 text-slate-400" onClick={() => inputRef.current?.focus()}/>
            <Input 
                ref={inputRef}
                className="w-full border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                placeholder="Rechercer"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleChange(e.target.value);
                }}
            />
        </div>
    );
}
