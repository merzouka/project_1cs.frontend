import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { 
    Select,
    SelectItem,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Role } from "@/stores/user-store";
import { Label } from "@/components/ui/label";
import { provinces } from "@/constants/provinces";
import { cities } from "@/constants/cities";
import { LuSettings2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useRef, useState } from "react";
import { getRoleMap } from "@/stores/user-store";

export const Filter = (
    {
        className,
    }: {
        className?: string;
    }
) => {
    const params = useSearchParams();
    const { replace } = useRouter();
    function setParam(key: string, value: string) {
        const newParams = new URLSearchParams(params);
        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        replace(`roles?${newParams.toString()}`);
    }

    const handleSearch = useDebouncedCallback(
        (value: string) => { setParam('query', value); }
    , 500);

    const [filters, setFilters] = useState<{
        role?: string;
        provinceId?: string;
        cityId?: string;
    }>({
        role: params.get('role') || undefined,
        provinceId: params.get('province') || undefined,
        cityId: params.get('city') || undefined,
    });

    const handleFilter = useDebouncedCallback(
        (
            {
                role,
                provinceId,
                cityId
            }:
            {
                role?: string;
                provinceId?: string;
                cityId?: string;
            }
        ) => {
            const newParams = new URLSearchParams(params);
            if (role) {
                newParams.set('role', role);
            } else {
                newParams.delete('role');
            }
            if (provinceId) {
                newParams.set('province', provinceId);
            } else {
                newParams.delete('province');
            }
            if (cityId) {
                newParams.set('city', cityId);
            } else {
                newParams.delete('city');
            }
            replace(`roles?${newParams.toString()}`)
        }
    , 600)
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex gap-x-3 items-center justify-center w-full mb-2 md:mb-4">
            <div className={cn(
                "flex items-center border border-slate-100 rounded-lg px-2 focus-within:ring-2 overflow-clip",
                "focus-within:ring-black focus-within:ring-offset-2",
                "flex-grow rounded-full border-slate-200 border",
                "px-4",
                className
            )}>
                <LuSearch className="size-6 text-slate-500" onClick={() => inputRef.current?.focus()}/>
                <Input 
                    ref={inputRef}
                    className="w-full border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    placeholder="Rechercher email"
                    defaultValue={params.get('query') || ''}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                />
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className="rounded-xl shadow-md text-white bg-orange-400 hover:bg-orange-300"
                        size={"icon"}
                    >
                        <LuSettings2 className="size-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Label>{"Role"}</Label>
                    <Select defaultValue={filters.role} onValueChange={(value) => {
                        const newFilters = { ...filters, role: getRoleMap(Number(value)) };
                        setFilters(newFilters);
                        handleFilter(newFilters);
                    }}>
                        <SelectTrigger className="shadow-md rounded-2xl">
                            <SelectValue placeholder={"Sélectionner"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={Role.admin.toString()}>{"Admin"}</SelectItem>
                            <SelectItem value={Role.user.toString()}>{"User"}</SelectItem>
                            <SelectItem value={Role.drawingManager.toString()}>{"Responsable de tirage"}</SelectItem>
                            <SelectItem value={Role.paymentManager.toString()}>{"Responsable des payment"}</SelectItem>
                            <SelectItem value={Role.doctor.toString()}>{"Docteur"}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Label>{"Wilaya"}</Label>
                    <Select defaultValue={filters.provinceId} onValueChange={(value) => {
                        const newFilters = { ...filters, provinceId: value };
                        setFilters(newFilters);
                        handleFilter(newFilters);
                    }}>
                        <SelectTrigger className="shadow-md rounded-2xl">
                            <SelectValue placeholder={"Sélectionner"} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                provinces.map(province => (
                                    <SelectItem key={province.number} value={`${province.number}`}>
                                        {province.name}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    <Label>{"Commune"}</Label>
                    <Select defaultValue={filters.cityId} 
                        onValueChange={(value) => {
                            const newFilters = { ...filters, cityId: value };
                            setFilters(newFilters);
                            handleFilter(newFilters);
                        }}
                        disabled={!filters.provinceId}
                    >
                        <SelectTrigger className="shadow-md rounded-2xl">
                            <SelectValue placeholder={"Sélectionner"} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                cities
                                .filter(city => city.province == Number(filters.provinceId))
                                .map(city => (
                                    <SelectItem key={city.id} value={`${city.id}`}>
                                        {city.name}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </PopoverContent>
            </Popover>
        </div>
    );
}

