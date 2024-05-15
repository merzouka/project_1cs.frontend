"use client"
import * as React from "react"
import { useState } from 'react';


import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function CardWithForm() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())


    return (
        <Card className="w-[528px] ml-[150px] mt-[150px] rounded-[24px]">

            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mt-6 ">
                            <label htmlFor="name">Titre</label>
                            <input className="flex flex-col space-y-1.5   h-10 w-full items-center justify-between rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300" id="name" placeholder="Veuillez entrer le nombre des place" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1.5 mt-4 mb-4 rounded-[15px]">
                        <label htmlFor="framework" className="ml-1">Aéroport</label>
                        <Select >
                            <SelectTrigger id="framework" className="rounded-[15px]">
                                <SelectValue placeholder="Veuillez choisir l’aéroport" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="next">oran</SelectItem>
                                <SelectItem value="sveltekit">alger</SelectItem>
                                <SelectItem value="astro">annaba</SelectItem>
                                <SelectItem value="nuxt">chlef</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <div>


                        <div className="flex flex-col space-y-1.5 mb-5 ">
                            <label htmlFor="name" className="ml-1">Nombre de places</label>
                            <input className=" mb-14 flex flex-col space-y-1.5   h-10 w-full items-center justify-between rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300" id="name" placeholder="Veuillez entrer le nombre des places" type="number" />
                        </div>

                    </div>
                    <div className="flex justify-between mb-3">
                        <Label className="ml-1">Date de départ</Label>
                        <Label className="mr-[120px]">Date de départ</Label>
                    </div>

                    <div className="flex justify-between">

                        <Popover >
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[225px] justify-start text-left font-normal rounded-[15px]",
                                        !Date && "text-muted-foreground"
                                    )}
                                >
                                    <span>Pick a date</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <div className="rounded-md border mt-5 ml-14">
                                    < Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                    />
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger asChild>

                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[225px] justify-start text-left font-normal rounded-[15px]",
                                        !Date && "text-muted-foreground"
                                    )}
                                >

                                    <span>Pick a date</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <div className="rounded-md border mt-5">
                                    <Calendar mode="single" selected={date} onSelect={setDate} />
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between w-full mt-2">

                <Button className="w-full bg-[#1E1E1E]">Enregistrer</Button>
            </CardFooter>
        </Card>
    )
}
