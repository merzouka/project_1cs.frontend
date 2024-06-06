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
import { Province, provinces } from "@/constants/provinces";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { City, mappedCities } from "@/constants/mapped-cities";
import { SearchBar } from "@/app/components/search-bar";
import { FiPlusCircle } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { cities } from "@/constants/cities";
import { motion } from "framer-motion";

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

export enum PlaceType {
    province,
    city
}

export interface Place {
    type: PlaceType,
    city?: City,
    province?: Province,
}

function processCities(userProvinces: number[], userCities: number[]) {
    let result: Place[] = [];
    for (const province of userProvinces) {
        let canAggregate = true;
        const provinceCities = mappedCities.filter(city => city.province.number === province);
        for (const city of provinceCities) {
            if (!userCities.includes(city.id)) {
                canAggregate = false
                break;
            }
        }
        if (canAggregate) {
            result.push({
                type: PlaceType.province,
                province: provinceCities[0]?.province,
            });
            const provinceCityIds = provinceCities.map(city => city.id);
            userCities = userCities.filter(city => !provinceCityIds.includes(city));
        }
    }
    for (const cityId of userCities) {
        result.push({
            type: PlaceType.city,
            city: mappedCities.find(city => city.id == cityId),
        });
    }
    return result;
}

function updatePlaces(places: Place[], cityId: number): Place[] {
    const city = mappedCities.find(city => city.id == cityId);
    places.push({
        type: PlaceType.city,
        city: city,
    });
    const provinceCityIds = cities.filter(c => c.province === city?.province.number).map(city => city.id);
    const placesCityIds = places.filter(place => place.type === PlaceType.city).map(place => place.city?.id);
    let canAggregate = true;
    for (const provinceCity of provinceCityIds) {
        if (!placesCityIds.includes(provinceCity)) {
            canAggregate = false;
            break;
        }
    }
    if (canAggregate) {
        places = places.filter(place => place.type != PlaceType.city || (
            place.type == PlaceType.city && !provinceCityIds.includes(place.city?.id || 0)
        ));
        places.push({
            type: PlaceType.province,
            province: city?.province,
        });
    } else {
        places = [...places]
    }
    return places;
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
    const [selectedPlaces, setSelectedPlaces] = useState<Place[]>(processCities(info.provinces, info.cities) || [])
    const selectedCityIds = useMemo(
        () => selectedPlaces.filter(place => place.type == PlaceType.city).map(place => place.city?.id)
    , [selectedPlaces])
    const [role, setRole] = useState<Role>(info.role || Role.user);

    function handleProvinceSelect(value: string) {
        setSelectedProvinces([...selectedProvinces, Number(value)]);
    }

    function handleCitySelect(value: string) {
        setSelectedPlaces(updatePlaces(selectedPlaces, Number(value)));
    }

    function handlePlaceRemove(place: Place) {
        const newPlaces = selectedPlaces.filter(
            p => !(
                p.type == place.type 
                    && (
                        p.type == PlaceType.province ?
                            p.province?.number == place.province?.number :
                            p.city?.id == place.city?.id
                    )
            )
        );
        setSelectedPlaces(newPlaces);
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

    const disabled = false;
    const overlay = <div className="absolute right-0 bottom-0 left-0 top-0 bg-slate-100/50 z-[10]"></div>;

    const provinceSelectItems = useMemo(
        () => {
            return provinces
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

    }, [selectedProvinces])
    const citiesSelectItems = useMemo(
        () => {
            return selectedProvinces
                .filter(province => !selectedPlaces.find(place => place.type == PlaceType.province && place.province?.number == province))
                .map(selected => (
                    <SelectGroup key={selected}>
                        <SelectLabel>{provinces.find(province => province.number == selected)?.name || null}</SelectLabel>
                        {
                            mappedCities
                            .filter(city => city.province.number == selected && !selectedCityIds.includes(city.id))
                            .map(city => <SelectItem key={city.id} value={`${city.id}`}>{city.name}</SelectItem>)
                        }
                    </SelectGroup>
                ))
        }
    , [selectedProvinces, selectedPlaces])
    const selectedProvinceTags = useMemo(
        () => {
            return selectedProvinces
                .map(selected => {
                    const province = provinces.find(province => province.number == selected);
                    return (
                        <PlaceTag 
                            className="m-1"
                            place={{
                                type: PlaceType.province,
                                province: province
                            }}
                            onClick={() => setSelectedProvinces(selectedProvinces.filter(selected => selected != province?.number))}
                        />
                    );
                })
    }, [selectedProvinces])
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
                    <Select onValueChange={(value) => setRole(getRole(value))} value={`${role}`}>
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
                                {
                                    provinceSelectItems
                                }
                            </SelectContent>
                        </Select>
                        <TooltipContent className="flex flex-wrap max-w-96">
                            {
                                selectedProvinceTags
                            }
                        </TooltipContent>
                    </Tooltip>
                </TableCell>
                <TableCell className=" flex flex-wrap w-full relative justify-center items-center">
                    {
                        disabled &&
                            overlay
                    }
                    <motion.div layout className="flex flex-wrap gap-1">
                        {
                            selectedPlaces.length > 0 && selectedPlaces.slice(0, 3).map((selected) => <PlaceTag 
                                key={selected.city?.id || selected.province?.number} 
                                place={selected} 
                                onClick={() => handlePlaceRemove(selected)}
                            />)
                        }
                        {selectedPlaces.length > 3 && 
                            <Tooltip>
                                <TooltipTrigger className="border-0 hover:bg-transparent bg-transparent hover:text-slate-400 font-bold text-xl px-2">
                                    ...
                                </TooltipTrigger>
                                <TooltipContent className="flex flex-wrap max-w-60 gap-2 items-center justify-center">
                                    {selectedPlaces.slice(3).map((selected) => (
                                        <PlaceTag 
                                            className="m-1"
                                            onClick={() => handlePlaceRemove(selected)}
                                            key={selected.city?.id || selected.province?.number} 
                                            place={selected} 
                                        />
                                    ))}
                                </TooltipContent>
                            </Tooltip>
                        }
                        <motion.div layout>
                            <Select onValueChange={handleCitySelect} value={undefined} disabled={citiesSelectItems.length == 0}>
                                <SelectTrigger className={cn(
                                    "[&>svg]:hidden border-0 w-fit shadow-md rounded-xl text-slate-400 ",
                                    "bg-white hover:bg-white hover:text-slate-500 aspect-square flex items-center justify-center",
                                    "disabled:hover:text-slate-400"
                                )}>
                                    <div>
                                        <FiPlusCircle className="size-5"/>
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="shadow-lg">
                                    {
                                        citiesSelectItems
                                    }
                                </SelectContent>
                            </Select>
                        </motion.div>
                    </motion.div>
                </TableCell>
                <TableCell className="relative">
                    {
                        disabled &&
                            overlay
                    }
                    <Button className="rounded-full bg-orange-100 text-black font-semibold text-xs hover:bg-orange-200" size={"sm"}>
                        {"Sauvegarder"}
                    </Button>
                </TableCell>
            </TableRow>
        </TooltipProvider>    
    );
}

function PlaceTag({ place, onClick, className }: { place: Place; onClick: () => void; className?: string; }) {
    return (
        <motion.div layout>
            <Button 
                onClick={onClick}
                className={cn(
                    "text-black bg-white hover:text-white hover:bg-red-400 rounded-xl shadow-md font-semibold",
                    className,
                )}
            >
                {
                    place.type === PlaceType.city ?
                        getCityName(place.city):
                        place.province?.name
                }
            </Button>
        </motion.div>
    );
}
