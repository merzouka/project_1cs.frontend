"use client"
import * as React from "react"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosInstance } from '@/config/axios';
import { useToast } from "@/components/ui/use-toast"

export function AlertDialogDemoh() {
    const [isOpen, setIsOpen] = useState(false)
    const [hotelData, setHotelData] = useState({ nameHotel: '', adrsHotel: '' })
    const queryClient = useQueryClient();
    const addHotel = async (hotelData: any) => {
        try {
            const response = await AxiosInstance.post('http://localhost:8000/administrateur/add-hotel', {
                nom: hotelData.nameHotel,
                adress: hotelData.adrsHotel,
            });
            return response;  // Already just the data due to our interceptor
        } catch (error) {
            throw error;  // Rethrow for React Query to catch
        }
    };
    const { toast } = useToast();
    const mutation = useMutation({
        mutationFn: addHotel,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['hotels'] })
            setIsOpen(false)
            setHotelData({ nameHotel: '', adrsHotel: '' })
            toast({
                description: "Creation d'hotel avec succès.",
            });
        },
        onError: () => {
            toast({
                description: "Creation d'hotel échoué.",
                variant: "destructive",
            });
        }
    })

    const handleChange = (field: any) => (e: any) => {
        setHotelData(prev => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        mutation.mutate(hotelData)
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="font-semibold bg-[#1E1E1E] rounded-[30px] text-white w-[133px] mb-2"
                    onClick={() => setIsOpen(true)}
                >
                    Ajouter
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-[24px] border-transparent h-[320px] min-w-[590px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Ajouter un Hôtel</AlertDialogTitle>
                </AlertDialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4 mb-2">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="nameHotel">Nom</label>
                            <input
                                className="flex h-10 w-full rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950"
                                id="nameHotel"
                                placeholder="Entrer le nom de l'hôtel"
                                value={hotelData.nameHotel}
                                onChange={handleChange('nameHotel')}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="adrsHotel">Adresse</label>
                            <input
                                className="flex h-10 w-full rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-950"
                                id="adrsHotel"
                                placeholder="Entrer l'adresse de l'hôtel"
                                value={hotelData.adrsHotel}
                                onChange={handleChange('adrsHotel')}
                                required
                            />
                        </div>
                    </div>
                </form>
                {mutation.isError && (
                    <p className="text-red-500 text-sm mt-2">{mutation.error.message}</p>
                )}
                <AlertDialogFooter className="flex justify-between">
                    <AlertDialogCancel
                        className="w-[240px] text-center mr-[40px]"
                        onClick={() => setHotelData({ nameHotel: '', adrsHotel: '' })}
                    >
                        Annuler
                    </AlertDialogCancel>
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
