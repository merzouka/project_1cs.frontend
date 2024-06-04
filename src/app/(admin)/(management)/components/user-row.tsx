"use client";
import { Role } from "@/stores/user-store";
import {
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectItem,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectValue,
} from "@/components/ui/select";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { provinces } from "@/constants/provinces";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { City, mappedCities } from "@/constants/mapped-cities";
import { SearchBar } from "@/app/components/search-bar";
import { FiPlusCircle } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: Role | undefined;
    provinces: number[];
    cities: number[];
}

function getCityName(city: City | undefined): string {
    if (!city) {
        return "";
    }
    return `${city.province.name}/${city.name}`
}

function getRole(value: string): Role {
    const roles = [
        Role.user,
        Role.haaj,
        Role.drawingManager,
        Role.superAdmin,
        Role.doctor,
        Role.paymentManager,
        Role.admin,
    ];
    const index = Number(value);
    return index >= 0 && index < roles.length ? roles[index] : roles[0];
}

export const UserRow = (
    {
        info,
        index,
    }: {
        info: User;
        index: number;
    }
) => {
    const [selectedProvinces, setSelectedProvinces] = useState<number[]>(info.provinces || []);
    const [selectedCities, setSelectedCities] = useState<number[]>(info.cities || []);
    const [role, setRole] = useState(info.role || undefined);
    const [cityTerm, setCityTerm] = useState<string>("");
    const [provinceTerm, setProvinceTerm] = useState<string>("");

    function handleProvinceSelect(value: string) {
        setSelectedProvinces([...selectedProvinces, Number(value)]);
    }

    function handleCitySelect(value: string) {
        setSelectedCities([...selectedCities, Number(value)]);
    }

    function handleCityRemove(value: number) {
        const newCities = [...selectedCities].filter(id => id != value);
        setSelectedCities(newCities);
    }

    const { isPending, mutate } = useMutation({
        mutationKey: ["assign privilege", info.id],
        mutationFn: async () => {
            const response = await AxiosInstance.patch(getUrl(endpoints.assignPrivilege));
            return response.data;
        },
        onMutate: () => {

        },
        onSuccess: () => {

        },
        onError: () => {

        }
    });

    function handleSave() {
    }

    const disabled = true;
    const overlay = <div className="absolute right-0 bottom-0 left-0 top-0 bg-slate-100/50 z-[10]"></div>;

    return (
        <TooltipProvider>
            <TableRow className="relative">
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    {index}
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    {info.lastName}
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    {info.firstName}
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    {info.email}
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    <Select onValueChange={(value) => setRole(getRole(value))}>
                        <SelectTrigger className="shadow-md rounded-2xl">
                            <SelectValue placeholder={"Sélectionner"} defaultValue={role}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={Role.admin.toString()}>{"Admin"}</SelectItem>
                            <SelectItem value={Role.user.toString()}>{"User"}</SelectItem>
                            <SelectItem value={Role.drawingManager.toString()}>{"Responsable de tirage"}</SelectItem>
                            <SelectItem value={Role.paymentManager.toString()}>{"Responsable des payment"}</SelectItem>
                            <SelectItem value={Role.doctor.toString()}>{"Docteur"}</SelectItem>
                        </SelectContent>
                    </Select>
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    <Tooltip>
                        <Select onValueChange={handleProvinceSelect}>
                            {
                                selectedProvinces.length == 0 ?
                                    <SelectTrigger className="rounded-2xl shadow-md flex item-center justify-center">
                                        <span>{"Sélectionner"}</span>
                                    </SelectTrigger>:
                                    <TooltipTrigger>
                                        <SelectTrigger className="rounded-2xl shadow-md flex">
                                            <span>{"Sélectionné:"}</span>
                                            <span className="font-bold text-slate-600 block ml-2">{selectedProvinces.length || 0}</span>
                                        </SelectTrigger>
                                    </TooltipTrigger>
                            }
                            <SelectContent className="shadow-lg p-2 max-w-52 rounded-2xl max-h-72">
                                <SearchBar
                                    className="py-0"
                                    onChange={(value) => setProvinceTerm(value)}
                                />
                                {
                                    provinces
                                    .filter(province => `${province.name.toLowerCase()}`.includes(provinceTerm))
                                    .map((province) => (
                                        <SelectItem key={province.number} value={`${province.number}`} className={cn(
                                            "p-1 text-slate-600",
                                            selectedProvinces.includes(province.number) &&"[&>span>span>svg]:hidden",
                                        )}>
                                            <span className={cn(
                                                selectedProvinces.includes(province.number) && "font-semibold text-black",
                                            )}>{province.name}</span> 
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                        <TooltipContent>
                            {
                                selectedProvinces
                                .map(selected => {
                                    const province = provinces.find(province => province.number == selected);
                                    return (
                                        <>
                                            { province ? <p key={province?.number}>{province?.name}</p> : null }
                                        </>
                                    );
                                })
                            }
                        </TooltipContent>
                    </Tooltip>
                </TableCell>
                <TableCell className=" flex flex-wrap w-full relative justify-center items-center">
                    {
                        disabled &&
                            overlay
                    }
                    <div className="flex flex-wrap gap-1">
                        {
                            selectedCities.length > 0 && selectedCities.slice(0, 3).map((selected) => <CityTag 
                                key={selected} 
                                cityId={selected} 
                                onClick={() => handleCityRemove(selected)}
                            />)
                        }
                        {selectedCities.length > 3 && 
                            <Tooltip>
                                <TooltipTrigger className="border-0 hover:bg-transparent bg-transparent hover:text-slate-400 font-bold text-xl px-2">
                                    ...
                                </TooltipTrigger>
                                <TooltipContent className="flex flex-wrap max-w-60 gap-2 items-center justify-center">
                                    {selectedCities.slice(3).map((selected) => (
                                        <CityTag 
                                            className="m-1"
                                            onClick={() => handleCityRemove(selected)}
                                            key={selected} 
                                            cityId={selected} 
                                        />
                                    ))}
                                </TooltipContent>
                            </Tooltip>
                        }
                        <Select onValueChange={handleCitySelect}>
                            <SelectTrigger className={"[&>svg]:hidden border-0 w-fit shadow-md rounded-xl text-slate-400 bg-white hover:bg-white hover:text-slate-500 aspect-square flex items-center justify-center"}>
                                <div>
                                    <FiPlusCircle className="size-5"/>
                                </div>
                            </SelectTrigger>
                            <SelectContent className="shadow-lg">
                                <SearchBar 
                                    onChange={(value) => setCityTerm(value)}
                                />
                                {
                                    selectedProvinces
                                    .map(selected => (
                                        <SelectGroup key={selected}>
                                            <SelectLabel>{provinces.find(province => province.number == selected)?.name || null}</SelectLabel>
                                            {
                                                mappedCities
                                                .filter(city => city.province.number == selected && !selectedCities.includes(city.id) && `${city.name.toLowerCase()}`.includes(cityTerm))
                                                .map(city => <SelectItem key={city.id} value={`${city.id}`}>{city.name}</SelectItem>)
                                            }
                                        </SelectGroup>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    <Button className="rounded-full bg-pink-300 text-black font-semibold" size={"sm"}>
                        {"Sauvegarder"}
                    </Button>
                </TableCell>
            </TableRow>
        </TooltipProvider>    
    );
}

function CityTag({ cityId, onClick, className }: { cityId: number; onClick: () => void; className?: string; }) {
    return (
        <Button 
            onClick={onClick}
            className={cn(
                "text-black bg-white hover:text-white hover:bg-red-400 rounded-xl shadow-md font-semibold",
                className,
            )}
        >
            {getCityName(mappedCities.find(city => city.id == cityId))}
        </Button>
    );
}
