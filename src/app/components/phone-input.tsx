import CountrySelect from "@/app/(admin)/(auth)/components/country-select";
import { icons } from "@/constants/icons";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const PhoneInput = ({
    onPhoneChange,
    onPhoneNumberChange,
    disabled,
    phoneValue,
    countryDefault,
    control,
    styles,
}: {
    onPhoneNumberChange: (value: string) => void;
    onPhoneChange: (value: string) => void;
    disabled?: boolean;
    phoneValue: string;
    countryDefault?: string;
    control: (children: React.ReactNode) => React.ReactNode;
    styles?: {
        container?: string;
        field?: string;
    }
}) => {
    const [countryCode, setCountryCode] = useState<string | undefined>(countryDefault != "" ? countryDefault : undefined);
    const [inputDisabled, setInputDisabled] = useState(true);

    return (
        <div className={cn(
            "w-full max-w-[33rem]",
            styles?.container,
        )}>
            <div className="w-full flex justify-between items-center pe-2">
                <label className="text-sm font-medium">{"Téléphone"}</label>
                <Toggle
                    className="bg-transparent hover:bg-transparent [state=on]:text-black text-slate-400
                data-[state=on]:bg-transparent"
                    onPressedChange={() => setInputDisabled(!inputDisabled)}>
                    {icons.modify("size-5")}
                </Toggle>
            </div>
            <div className={cn(
                "flex rounded-xl w-full focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2",
                inputDisabled && "bg-slate-200",
                styles?.field,
            )}>
                <CountrySelect
                    onChange={(value) => {
                        onPhoneChange(`${value}-${phoneValue}`)
                        setCountryCode(value);
                    }}
                    defaultValue={countryCode}
                    disabled={inputDisabled || disabled}
                    className={{
                        trigger: "rounded-l-xl max-w-fit rounded-r-none",
                    }}
                />
                {control(
                    <Input
                        onChange={(e) => {
                            onPhoneChange(`${countryCode}-${e.target.value}`)
                            onPhoneNumberChange(e.target.value);
                        }}
                        value={phoneValue}
                        disabled={disabled || inputDisabled}
                        className="flex-grow rounded-l-none rounded-r-xl focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                )}
            </div>
        </div>
    );
}
