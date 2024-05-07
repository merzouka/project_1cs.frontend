import { cities } from "@/constants/cities";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface City {
    name: string,
    id: string | number,
    wilaya: number,
}

export const CitySelect = ({
    defaultValue,
    onChange,
    control,
    province,
    className,
    disabled,
}: {
        defaultValue: string;
        onChange: (value: string) => void;
        control: (children: React.ReactNode) => React.ReactNode,
        province: number | undefined,
        className?: string,
        disabled?: boolean,
    }) => {
    return(
        <Select onValueChange={onChange} value={defaultValue} disabled={disabled}>
            {control(
                <SelectTrigger className={cn(
                    className
                )}>
                    <SelectValue placeholder="Séléctionner votre commune."/>
                </SelectTrigger>
            )}
            <SelectContent>
                {
                    !province ? 
                        <p>Sélectionnez une wilaya</p>:
                        cities.filter((city) => city.province == province).map((city) => (
                            <SelectItem key={city.id} value={`${city.id}`}>{city.name}</SelectItem>
                        ))
                }
            </SelectContent>
        </Select>
    );
}
