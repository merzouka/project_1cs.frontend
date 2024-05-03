import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

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
    cities,
    className,
}: {
        defaultValue: string;
        onChange: (value: string) => void;
        control: (children: React.ReactNode) => React.ReactNode,
        province: number | undefined,
        cities: City[],
        className?: string,
    }) => {
    return(
        <Select onValueChange={onChange} defaultValue={defaultValue}>
            <SelectTrigger>
                {control(
                    <SelectTrigger className={className}>
                        <SelectValue placeholder="Séléctionner votre commune."/>
                    </SelectTrigger>
                )}
            </SelectTrigger>
            <SelectContent>
                {
                    province &&
                        cities.filter((city) => city.wilaya == province).map((city) => (
                            <SelectItem key={city.id} value={`${city.id}`}>{city.name}</SelectItem>
                        ))
                }
            </SelectContent>
        </Select>
    );
}
