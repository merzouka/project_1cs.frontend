import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '@/components/ui/select'
import { provinces } from '@/constants/provinces';

export const ProvinceSelect = ({
    onChange,
    defaultValue,
    control,
    className,
}: {
        onChange: (value: string) => void,
        defaultValue: string,
        control: (children: React.ReactNode) => React.ReactNode,
        className?: string,
    }) => {
    return (
        <Select onValueChange={onChange} defaultValue={defaultValue}>
            {control(
                <SelectTrigger className={className}>
                    <SelectValue placeholder="Séléctionner votre wilaya."/>
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
