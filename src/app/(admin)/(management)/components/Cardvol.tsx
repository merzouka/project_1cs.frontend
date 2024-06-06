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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "@/config/axios";
import { provinces } from "@/constants/provinces";

export function AlertDialogDemo() {
    /////////////////////////////////////////
    const [isOpen, setIsOpen] = useState(false)
    const [ar, setar] = useState()
    const [volData, setvolData] = useState({ name: '', framework: '', nbplace: '', calendara: '', calendarb: '', depheure: '', arheure: '' })
    const queryClient = useQueryClient()





    const addVol = async (volData: any) => {
        try {
            const response = await AxiosInstance.post('http://localhost:8000/administrateur/add-vole', {
                nom: volData.name,
                aeroprt: volData.framework,
                'date_depart': volData.calendara,
                'date_arrivee': volData.calendarb,
                'nb_places': volData.nbplace,
                'heur_depart': volData.depheure,
                'heur_arrivee': volData.arheure,

            });
            return response;  // Already just the data due to our interceptor
        } catch (error) {
            throw error;  // Rethrow for React Query to catch
        }
    };




    const mutation = useMutation({
        mutationFn: addVol,
        onSuccess: (data) => {
            console.log('vol added:', data)
            queryClient.invalidateQueries({ queryKey: ['vols'] })
            setIsOpen(false)
            setvolData({ name: '', framework: '', nbplace: '', calendara: '', calendarb: '', depheure: '', arheure: '' })
            // Nice success toast
        },
        onError: (error) => {
            console.error('Failed to add hotel:', error.message)
            // Show error in a toast
        }
    })

    const handleChange = (field: any) => (e: any) => {
        setvolData(prev => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        mutation.mutate(volData)
    }
    /////////////////////////////////////////////////////
    const [date, setDate] = useState<Date | undefined>();
    const [otherDate, setOtherDate] = useState<Date | undefined>();
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
            <AlertDialogTrigger asChild>
                <Button
                    onClick={() => setIsOpen(true)}
                    variant="outline" className="font-semibold bg-[#1E1E1E] rounded-[30px] text-white w-[133px] mb-2" >Ajouter</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-[24px] border-transparent h-[550px] w-[590px] ">
                <Card className="w-[528px]   bg-transparent border-transparent">

                    <CardContent>
                        <form onSubmit={handleSubmit} >
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5  ">
                                    <label htmlFor="name">Titre</label>
                                    <input className="flex flex-col space-y-1.5 p-9  h-10 w-full items-center justify-between rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed
                                     disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950
                                      dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                                        id="name"
                                        placeholder="Veuillez entrer le nombre des place"
                                        value={volData.name}
                                        onChange={handleChange('name')}
                                        required />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1.5 mt-4 mb-4 rounded-[15px]">
                                <label htmlFor="framework" className="ml-1">Aéroport</label>
                                <Select onValueChange={(value) => setvolData(prev => ({ ...prev, framework: value }))} value={volData.framework}

                                >
                                    <SelectTrigger id="framework" className="rounded-[15px]"
                                    >
                                        <SelectValue placeholder="Veuillez choisir l’aéroport" />
                                    </SelectTrigger>
                                    <SelectContent position="popper"  >
                                        <SelectItem value="next">oran</SelectItem>
                                        <SelectItem value="sveltekit">alger</SelectItem>
                                        <SelectItem value="astro">annaba</SelectItem>
                                        <SelectItem value="nuxt">chlef</SelectItem>


                                    </SelectContent>
                                </Select>
                            </div>


                            <div>


                                <div className="flex flex-col space-y-1.5 mb-3 ">
                                    <label htmlFor="nbplace" className="ml-1">Nombre de places</label>
                                    <input className=" mb-14 flex flex-col space-y-1.5   h-10 w-full items-center justify-between rounded-[15px]
                                     border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 
                                     focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed 
                                     disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 
                                     dark:placeholder:text-slate-400 dark:focus:ring-slate-300" id="nbplace"
                                        placeholder="Veuillez entrer le nombre des places" type="number"
                                        value={volData.nbplace}
                                        onChange={handleChange('nbplace')}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="flex justify-between mb-3">
                                <Label className="ml-1">Heure de départ </Label>
                                <Label className="mr-[105px] ml-10 ">Heure d’arrivée  </Label>
                            </div>
                            <div className="flex  mb-[-30px] ">
                                <input className="w-[580px]  justify-start mb-10 space-y-1.5   h-10 w-full items-center justify-between rounded-[15px]
                                     border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 
                                     focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed 
                                     disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 
                                     dark:placeholder:text-slate-400 dark:focus:ring-slate-300" id="nbplace" placeholder="" type="depheure"
                                    value={volData.depheure}
                                    onChange={handleChange('depheure')}
                                    required
                                />
                                <input className=" w-[580px] ml-5 justify-end  flex flex-col space-y-1.5   h-10 w-full items-center justify-between rounded-[15px]
                                     border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 
                                     focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed 
                                     disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 
                                     dark:placeholder:text-slate-400 dark:focus:ring-slate-300" id="nbplace" placeholder="" type="arheure"
                                    value={volData.arheure}
                                    onChange={handleChange('arheure')}
                                    required
                                />

                            </div>
                            <div className="flex justify-between mb-3">
                                <Label className="ml-1">Date de départ</Label>
                                <Label className="mr-[105px] ml-10">Date de départ</Label>
                            </div>

                            <div className="flex justify-between mb-[-20px]  ">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button


                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] mr-5  rounded-[15px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4 " />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 mr-5">
                                        <Calendar

                                            id="calendara"
                                            mode="single"
                                            selected={date}
                                            onSelect={(date) => {
                                                setDate(date);
                                                setvolData(prev => ({ ...prev, calendara: date?.toISOString() || "" }))
                                            }
                                            }

                                            initialFocus

                                        />
                                    </PopoverContent>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button

                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] justify-start  rounded-[15px] text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {otherDate ? format(otherDate, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 ">
                                        <Calendar
                                            id="calendarb"
                                            mode="single"
                                            selected={otherDate}
                                            onSelect={(otherDate) => {
                                                setOtherDate(otherDate);
                                                setvolData(prev => ({ ...prev, calendara: otherDate?.toISOString() || "" }))
                                            }
                                            }
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
                    <AlertDialogAction
                        className="w-[240px] mr-9"
                        onClick={handleSubmit}
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? 'Enregistrement...' : 'Enregistrer'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
