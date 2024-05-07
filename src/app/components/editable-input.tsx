import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { icons } from "@/constants/icons";

export const EditableInput = ({
    onChange,
    value,
    disabled,
    placeholder,
    className
}: {
        onChange: (value: string) => void;
        value: string;
        disabled?: boolean;
        placeholder?: string;
        className?: string;
    }) => {
    const [disableInput, setDisableInput] = useState(true);

    return (
        <div className={cn(
            "flex itemx-center justify-center px-2 flex-grow",
            "focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2",
            "border border-slate-300 rounded-xl",
            disableInput && "bg-slate-100",
            className,
        )}>
            <Input 
                disabled={disabled || disableInput}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent border-0"
            />
            <Toggle 
                onPressedChange={() => setDisableInput(!disableInput)}
                size={"sm"}
                className="bg-transparent hover:bg-transparent [state=on]:text-black text-slate-400
                data-[state=on]:bg-transparent"
            >
                {icons.modify("size-5")}
            </Toggle>
        </div>
    );
}
