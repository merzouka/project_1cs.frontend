"use client";
import {
    Form,
    FormLabel,
    FormItem,
    FormControl,
    FormField,
    FormMessage
} from "@/components/ui/form";
import { 
    Select,
    SelectTrigger,
    SelectItem,
    SelectContent,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { endpoints } from "@/constants/endpoints";
import { getUrl } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { Pages } from "@/constants/pages";
import { AxiosInstance } from "@/config/axios";

const baseSplittingAge = 65
const formSchema = z.object({
    winners: z.string({ required_error: "Veuillez remplir le nombre de places." })
    .regex(new RegExp(/[0-9]+/), {
        message: "Veuillez saisir un numéro.",
    }),
    type: z.enum(["random", "age based"], { required_error: "Veuillez choisir le type du tirage." }).optional(),
    percentage: z.string({
        required_error: "Veuillez remplir le nombre de places.",
        invalid_type_error: "Veuillez saisir un pourcentage valide.",
    }).regex(new RegExp("[0-9]+"), {
        message: "Veuillez saisir un pourcentage valide.",
    }).refine((value) => Number(value) >= 0 && Number(value) <= 100, {
        message: "Veuillez saisir un pourcentage valide.",
    }).optional()
}).refine((data) => data.type == "random" || (data.type == "age based" && data?.percentage != undefined), {
    message: `Veuillez préciser le pourcentage de places réservées aux personnes âgées.`,
    path: ["percentage"],
});

export const Settings = () => {
    const { user, useValidateAccess: validateAccess } = useUser();
    validateAccess(Pages.drawingSettings);
    const { toast } = useToast();
    const router = useRouter();

    const [disableForm, setDisableForm] = useState(false);
    const { data, isLoading: isStateLoading, failureCount } = useQuery({
        queryKey: ["drawing state", user.email],
        queryFn: async () => {
            try {
                setDisableForm(true);
                const response = await AxiosInstance.get(getUrl(endpoints.getDrawing));
                toast({
                    description: "Le tirage à été déja definit.",
                    variant: "destructive",
                });
                setDisableForm(true);
                const drawingType = response.data.type_tirage == 1 ? DrawingType.Random : DrawingType.AgeBased;
                setDrawingType(drawingType);
                return {
                    winners: response.data.nombre_de_place,
                    waiting: response.data.nombre_waiting,
                    type: drawingType,
                    percentage: response.data.tranche_age,
                };
            } catch (error) {
                if (isAxiosError(error) && error.response?.status == 404) {
                    setDisableForm(false);
                    return {
                        message: 'no drawing found',
                    }
                }
                if (failureCount > 3) {
                    toast({
                        title: "Erreur de connexion",
                        description: "Nous ne pouvons pas connecter au serveur.",
                        variant: "destructive",
                    });
                    setDisableForm(true);
                }
                throw new Error("connection error");
            }
        }
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
            winners: data?.winners,
            type: data?.type,
            percentage: data?.percentage
        }
    });

    const { isLoading: isCitiesFetching, isError: isCitiesFetchError, data: cities } = useQuery({
        queryKey: ["cities", user.email],
        staleTime: 5 * 60 * 1000,
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.profileCitites));
                const cities = response.data[Object.keys(response.data)[0]]
                if (cities.length == 0) {
                    setDisableForm(true);
                }
                return cities;
            } catch (error) {
                throw new Error("connection erorr");
            }
        },
        retry: 2,
    });

    const { isPending: isSettingLoading, mutate } = useMutation({
        retry: 3,
        mutationKey: ["drawing start"],
        mutationFn: async (entries: z.infer<typeof formSchema>) => {
            const response = await AxiosInstance.post(getUrl(endpoints.drawingSettings), {
                utilisateur_id: user.id,
                type_tirage: entries?.type == DrawingType.Random ? 1 : 2,
                nombre_de_place: Number(entries?.winners),
                tranche_age: entries?.percentage || null,
            });
            return response;
        },
        onSuccess: () => {
            router.push("/drawing");
        },
        onError: () => {
            toast({
                title: "Erreur de connexion",
                description: "Nous ne pouvons pas lancer le tirage.",
                variant: "destructive",
            });
        }
    });
    function handleSubmit(values: z.infer<typeof formSchema>) {
        mutate(values)
    }

    enum DrawingType {
        Random = "random",
        AgeBased = "age based",
    }
    const [drawingType, setDrawingType] = useState<string>(DrawingType.Random);
    const formDisabled = disableForm || isStateLoading || isSettingLoading 
        || isCitiesFetching || isCitiesFetchError || cities.length == 0;
    console.log(disableForm);
    return (
        <div className="p-2 md:p-4 rounded-xl md:border md:border-slate-200 grow md:max-w-[65%]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
                    <AnimatePresence initial={false}>
                        <motion.div key="winners">
                            <FormField 
                                control={form.control}
                                name="winners"
                                render={({ field }) => (
                                    <FormItem className="mb-2">
                                        <FormLabel>{"Nombre de places"}</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="rounded-2xl"
                                                {...field}
                                                disabled={formDisabled}
                                                placeholder="Veuillez entrer le nombre de places"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs"/>
                                    </FormItem>
                                )}
                            />
                        <FormField 
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="mb-2 md:mb-4">
                                    <FormLabel>{"Type de l'algorithm"}</FormLabel>
                                    <Select 
                                        disabled={formDisabled}
                                        onValueChange={(value) => {
                                            setDrawingType(value)
                                            field.onChange(value)
                                        }} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger  className={cn(
                                                "rounded-2xl",
                                                field.value == undefined ? "text-slate-500" : "text-black"
                                            )}>
                                                <SelectValue 
                                                    placeholder="Veuillez sélectionner le type de l'algorithm"
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={DrawingType.Random}>{"Aléatoire"}</SelectItem>
                                            <SelectItem value={DrawingType.AgeBased}>{"Par tranche d'age"}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        </motion.div>
                        {
                            drawingType == DrawingType.AgeBased && 
                                <motion.div className="mb-3" 
                                    key="percentage"
                                    initial={{ opacity: 0, y: "-30%" }}
                                    animate={{ opacity: 1, y: "0" }}
                                    exit={{ opacity: 0 }}
                                >
                                    <FormField 
                                        control={form.control}
                                        name="percentage" 
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {`Pourcentage pour les personnes âgées (%)`}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        disabled={formDisabled}
                                                        className="rounded-2xl"
                                                        placeholder={`Pourcentage des places pour les personnes âgées (> ${baseSplittingAge}) (%)`}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs"/>
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                        }
                        <motion.div key="button">
                            <Button
                                disabled={formDisabled} 
                                type="submit" 
                                className="bg-black text-white hover:bg-black/75 rounded-full w-full"
                            >
                                {"Lancer le tirage"}
                            </Button>
                        </motion.div>
                    </AnimatePresence>
                </form>
            </Form>
        </div>
    );
}
