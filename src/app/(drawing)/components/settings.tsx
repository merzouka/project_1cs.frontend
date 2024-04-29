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
import axios, { isAxiosError } from "axios";
import { endpoints } from "@/constants/endpoints";
import { getUrl } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { Pages } from "@/constants/pages";

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
    const { user, validateAccess } = useUser();
    // TODO: uncomment
    // validateAccess(Page.drawingSettings);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            winners: undefined,
            type: undefined,
        }
    });
    const { toast } = useToast();
    const router = useRouter();

    const [isStateFetching, setIsStateFetching] = useState(true);
    const [disableForm, setDisableForm] = useState(false);
    const { isLoading: isStateLoading, isError: isStateError, failureCount } = useQuery({
        queryKey: ["drawing state"],
        enabled: isStateFetching,
        queryFn: async () => {
            try {
                setIsStateFetching(false);
                const response = await axios.get(getUrl(endpoints.drawingDefined(user.id)));
                if (response.data.tirage_definit) {
                    toast({
                        description: "Le tirage à été déja definit.",
                        variant: "destructive",
                    });
                    setDisableForm(true);
                }
                return response.data;
            } catch (error) {
                if (isAxiosError(error) && failureCount == 2) {
                    toast({
                        title: "Erreur de connexion",
                        description: "Nous ne pouvons pas connecter au serveur.",
                        variant: "destructive",
                    });
                    throw new Error("connection error");
                }
            }
        }
    })

    const [isSettingDrawing, setIsSettingDrawing] = useState(false);
    const { isLoading: isSettingLoading } = useQuery({
        queryKey: ["drawing start"],
        enabled: isSettingDrawing,
        retry: 0,
        queryFn: async () => {
            try {
                setIsSettingDrawing(false);
                const response = await axios.post(getUrl(endpoints.drawingSettings), {
                    utilisateur_id: user.id,
                    type_tirage: entries?.type == DrawingType.Random ? 1 : 2,
                    nombre_de_place: Number(entries?.winners),
                    tranche_age: entries?.percentage || null,
                });
                router.push("/drawing");
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
        setEntries(values);
        setIsSettingDrawing(true);
    }

    enum DrawingType {
        Random = "random",
        AgeBased = "age based",
    }
    const [drawingType, setDrawingType] = useState<string>(DrawingType.Random);
    const formDisabled = disableForm || isStateLoading || isStateError || isSettingLoading;
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
