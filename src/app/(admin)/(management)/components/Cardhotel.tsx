"use client"
import * as React from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";

export function AlertDialogDemoh() {
    return (
        <AlertDialog  >
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="font-semibold bg-[#1E1E1E] rounded-[30px] text-white w-[133px] mb-2">Ajouter</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-[24px] border-transparent h-[320px] w-[590px] ">
                <Card className="w-[528px]   bg-transparent border-transparent">

                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5  ">
                                    <label htmlFor="nameHotel">Nom</label>
                                    <input className="flex flex-col space-y-1.5 p-9  h-10 w-full items-center justify-between rounded-[15px] border
                                     border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none
                                      focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1
                                       dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                                        id="nameHotel" placeholder="entrer le nom  de l'hotel" />
                                </div>
                            </div>




                            <div>


                                <div className="flex flex-col space-y-1.5 mt-5 ">
                                    <label htmlFor="adrsHotel" className="ml-1 ">Adress</label>
                                    <input className=" mb-14 flex flex-col space-y-1.5   h-10 w-full items-center justify-between rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                                        id="adrsHotel" placeholder="entrer l'Adress de l'hotel " type="text" />
                                </div>

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
