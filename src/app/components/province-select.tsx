import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '@/components/ui/select'
import { provinces } from '@/constants/provinces';
import { cn } from "@/lib/utils";

export const ProvinceSelect = ({
    onChange,
    defaultValue,
    control,
    className,
    disabled,
}: {
        onChange: (value: string) => void,
        defaultValue: string,
        control: (children: React.ReactNode) => React.ReactNode,
        className?: string,
        disabled?: boolean,
    }) => {
    return (
        <Select onValueChange={onChange} defaultValue={defaultValue} disabled={disabled}>
            {control(
                <SelectTrigger className={cn(
                    className,
                )}>
                    <SelectValue className='text-slate-300' placeholder="Séléctionner votre wilaya."/>
                </SelectTrigger>
            )}
            <SelectContent>
                {
                    provinces.map((province) => (
                        <SelectItem key={`${province.number}`} value={`${province.number}`}>
                            {province.name}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
}
