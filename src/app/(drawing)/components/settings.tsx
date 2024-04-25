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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { endpoints, getUrl } from "@/constants/api";
import { useCitiesStore } from "../stores/cities";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const baseSplittingAge = 65
const formSchema = z.object({
    winners: z.string({ required_error: "Veuillez remplir le nombre de places." })
    .regex(new RegExp(/[0-9]+/), {
        message: "Veuillez saisir un numéro.",
    }),
    type: z.enum(["random", "age based"], { required_error: "Veuillez choisir le type du tirage." }),
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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            winners: undefined,
            type: undefined,
        }
    });
    const [isFetching, setIsFetching] = useState(false);
    const cities = useCitiesStore(state => state.cities);
    const { toast } = useToast();
    const { isLoading } = useQuery({
        queryKey: ["drawing start"],
        enabled: isFetching,
        retry: 0,
        queryFn: async () => {
            try {
                setIsFetching(false);
                const response = await axios.post(getUrl(endpoints.startDrawing), {
                    type: entries?.type,
                    places: Number(entries?.winners),
                    cities: cities.map((city) => city.id),
                });
                return response;
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas lancer le tirage.",
                    variant: "destructive",
                });
                throw new Error("connection error");
            }
        }
    });

    const [entries, setEntries] = useState<z.infer<typeof formSchema> | undefined>(undefined);
    function handleSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setEntries(values);
        setIsFetching(true);
    }

    enum DrawingType {
        Random = "random",
        AgeBased = "age based",
    }
    const [drawingType, setDrawingType] = useState<string>(DrawingType.Random);
    return (
        <div className="p-2 md:p-4 rounded-xl md:border md:border-slate-200 grow md:max-w-[65%]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
                    <LayoutGroup>
                        <motion.div>
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
                                                placeholder="Veuillez entrer le nombre de places"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs"/>
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                        <motion.div>
                            <FormField 
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem className="mb-2 md:mb-4">
                                        <FormLabel>{"Type de l'algorithm"}</FormLabel>
                                        <Select onValueChange={(value) => {
                                            setDrawingType(value)
                                            field.onChange(value)
                                        }} defaultValue={field.value}>
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
                        <AnimatePresence initial={false}>
                            {
                                drawingType == DrawingType.AgeBased && 
                                    <motion.div className="mb-3" 
                                        initial={{ opacity: 0, y: "-30%" }}
                                        animate={{ opacity: 1, y: "0" }}
                                        exit={{ opacity: 0 }}
                                        layout
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
                        </AnimatePresence>
                        <motion.div>
                            <Button disabled={isLoading} type="submit" className="bg-black text-white hover:bg-black/75 rounded-full w-full">
                                {"Lancer le tirage"}
                            </Button>
                        </motion.div>
                    </LayoutGroup>
                </form>
            </Form>
        </div>
    );
}
