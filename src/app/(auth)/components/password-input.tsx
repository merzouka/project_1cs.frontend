"use client";
import { 
    FormMessage,
    FormLabel,
    FormControl,
    FormItem,
} from "@/components/ui/form";
import {
    Eye,
    EyeOff
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PasswordInput({ 
    className,
    onBlur,
    onChange,
    value,
    disabled,
    label,
    placeholder,
    }: {
        className?: {
            item?: string,
            field?: string,
        };
        onBlur?: () => void;
        onChange?: (e: any) => void;
        value: string;
        disabled?: boolean;
        label?: string,
        placeholder?: string,
    }) {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    return (
        <FormItem className={className?.item}>
            <FormLabel className="">{label || "Mot de passe"}</FormLabel>
            <FormControl>
                <div className={cn(
                    "flex items-center px-1 border border-slate-100 rounded-full focus-within:ring-2 focus-within:ring-slate-950 focus-within:ring-offset-2 bg-gray-100",
                    "w-full",
                    className?.field
                )}>
                    <Input type={isPasswordHidden ? "password" : "text"} 
                        className="
                        bg-transparent
                        border-0 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder={placeholder || "Entrez votre mot de passe"}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                    />
                    <Toggle 
                        className="rounded-full text-slate-500 hover:text-black 
                        data-[state=on]:text-black data-[state=on]:bg-transparent
                        bg-transparent hover:bg-transparent"
                        size="sm" 
                        onPressedChange={() => setIsPasswordHidden(!isPasswordHidden)}>
                        {isPasswordHidden ? <Eye /> : <EyeOff />}
                    </Toggle>
                </div>
            </FormControl>
            <FormMessage className="text-xs"/>
        </FormItem> 
    );
}

