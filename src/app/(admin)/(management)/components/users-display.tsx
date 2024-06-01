"use client";
import { Users } from "./users";
import { useRef, useState } from "react";
import {
    Pagination,
    PaginationItem,
    PaginationContent,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useDebouncedCallback } from "use-debounce";
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

export const UsersDisplay = () => {
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
            if (role) {
                setParam('role', role);
            }
            if (provinceId) {
                setParam('province', provinceId);
            }
            if (cityId) {
                setParam('city', cityId);
            }
        }
    , 600)

    const className= "flex-grow rounded-2xl";
    const inputRef = useRef<HTMLInputElement>(null);
    const [province, setProvince] = useState(params.get('province') || "");

    return (
        <div className="flex flex-col items-stretch justify-stretch w-full h-full">
            <div className="flex gap-x-3 items-center justify-center w-full mb-2 md:mb-4">
                <div className={cn(
                    "flex items-center border border-slate-100 rounded-lg px-2 focus-within:ring-2",
                    "focus-within:ring-black focus-within:ring-offset-2",
                    "shadow-md shadow-slate-200",
                    className
                )}>
                    <LuSearch className="size-7 text-slate-400" onClick={() => inputRef.current?.focus()}/>
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
                    <PopoverTrigger>
                        <Button
                            className="rounded-xl shadow-md text-white bg-orange-400 hover:bg-orange-300"
                            size={"icon"}
                        >
                            <LuSettings2 className="size-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Label>{"Role"}</Label>
                        <Select value={params.get('role') || undefined} onValueChange={(value) => handleFilter({ role: value })}>
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
                        <Select value={params.get('province') || undefined} onValueChange={(value) => {
                            setProvince(value);
                            handleFilter({ provinceId: value });
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
                        <Select value={params.get('city') || undefined} 
                            onValueChange={(value) => handleFilter({ cityId: value })}
                            disabled={!params.get('province')}
                        >
                            <SelectTrigger className="shadow-md rounded-2xl">
                                <SelectValue placeholder={"Sélectionner"} />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    cities
                                    .filter(city => city.province == Number(province))
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
            <Users />
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>{params.get('page') || "1"}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
