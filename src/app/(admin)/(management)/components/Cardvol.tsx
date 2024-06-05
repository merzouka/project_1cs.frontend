"use client"
import * as React from "react"
import { useState } from 'react';


import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";

export function AlertDialogDemo() {
    const [date, setDate] = useState<Date | undefined>();
    const [otherDate, setOtherDate] = useState<Date | undefined>();
    return (
        <AlertDialog  >
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="font-semibold bg-[#1E1E1E] rounded-[30px] text-white w-[133px] mb-2">Ajouter</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-[24px] border-transparent h-[450px] w-[590px] ">
                <Card className="w-[528px]   bg-transparent border-transparent">

                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5  ">
                                    <label htmlFor="name">Titre</label>
                                    <input className="flex flex-col space-y-1.5 p-9  h-10 w-full items-center justify-between rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300" id="name" placeholder="Veuillez entrer le nombre des place" />
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
                                <Label className="mr-[125px] ml-1">Date de départ</Label>
                            </div>

                            <div className="flex justify-between mb-[-10px]  ">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] mr-5 justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 mr-5">
                                        <Calendar
                                            id="calendar-1"
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {otherDate ? format(otherDate, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 ">
                                        <Calendar
                                            id="calendar-2"
                                            mode="single"
                                            selected={otherDate}
                                            onSelect={setOtherDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </form>
                    </CardContent>

                </Card>
                <AlertDialogFooter className="flex justify-between">
                    <AlertDialogCancel className="w-[240px]  text-center mr-[40px]">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="w-[240px]  mr-9">Enregistrer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
