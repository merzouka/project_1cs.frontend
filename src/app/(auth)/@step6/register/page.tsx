"use client";
import {
    Form,
    FormControl,
    FormField, 
    FormItem, 
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { registerSchema4 } from "@/app/(auth)/constants/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { provinces } from "@/constants/provinces";
import { useForm } from "react-hook-form";
import { 
    Select,
    SelectContent,
    SelectTrigger,
    SelectItem,
    SelectValue
} from "@/components/ui/select";
import { Province, cities } from "@/constants/cities";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRegisterStore } from "@/app/(auth)/constants/register-store";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { endpoints, getUrl } from "@/constants/api";

// fonts
import { Rokkitt } from "next/font/google";
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";
import { slideInRightExitLeft, slideInRightExitRight } from "@/constants/animations";
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Step() {
    const entries = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof registerSchema4>>({
        resolver: zodResolver(registerSchema4),
        defaultValues: {
            province: entries?.province || "",
            city: entries?.city || "",
        }
    });
    const [province, setProvince] = useState<string | undefined>(undefined);
    const provinceCities = province && cities.find((city: Province) => city.province === province);
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries);
    const [isRegisterProcessing, setIsRegisterProcess] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const [selected, setSelected] = useState({
        province: false,
        city: false,
    });

    const { isLoading } = useQuery({
        queryKey: ["register"],
        queryFn: async () => {
            try {
                setIsRegisterProcess(false);
                const response = await axios.post(getUrl(endpoints.register), entries);
                router.push("/login");
                return response;
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas créer votre compte",
                    variant: "destructive",
                });
                throw new Error("connection error");
            }
        },
        enabled: isRegisterProcessing,
        retry: false,
    });
    async function onSubmit(values: z.infer<typeof registerSchema4>) {
        updateRegisterStore(values);
        setIsRegisterProcess(true);
    }

    const { direction } = useMultiStep(MultiStepKeys.register);
    const animation = direction == "forward" ? slideInRightExitLeft : slideInRightExitRight;
    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="step-6-header"
                {...animation}
            >
                {"Vos informations"}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="step-6-form"
                    {...animation}
                    className="w-full flex items-center justify-center"
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-80 lg:w-[22rem]">
                        <FormField 
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                                <FormItem className="mb-2">
                                    <FormLabel>Wilaya*</FormLabel>
                                    <Select 
                                        onValueChange={(value) => {
                                            setProvince(provinces.find((province) => `${province.number}` == value)?.name);
                                            setSelected({...selected, province: true})
                                            field.onChange(value);
                                        }} 
                                        defaultValue={field.value}
                                        disabled={isLoading}
                                    >
                                        <FormControl>
                                            <SelectTrigger className={cn(
                                                "rounded-full text-gray-500",
                                                selected.province && "text-black"
                                            )}>
                                                <SelectValue placeholder="Sélectionneé votre wilaya"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                provinces.sort().map((province) => (
                                                    <SelectItem key={province.number} value={`${province.number}`} className="capitalize">
                                                        {province.name}
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="mb-5">
                                    <FormLabel>Commune*</FormLabel>
                                    <Select 
                                        onValueChange={(value) => {
                                            setSelected({...selected, city: true});
                                            field.onChange(value);
                                        }} 
                                        defaultValue={field.value}
                                        disabled={isLoading}
                                    >
                                        <FormControl>
                                            <SelectTrigger className={cn(
                                                "rounded-full text-gray-500",
                                                selected.city && "text-black"
                                            )}>
                                                <SelectValue placeholder="Sélectionnez votre commune"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                !provinceCities ?
                                                    <p>Sélectionnez une wilaya</p>:
                                                    provinceCities.cities.map((city) => (
                                                        <SelectItem key={city.id} value={city.city}>
                                                            {city.city}
                                                        </SelectItem>
                                                    ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <Button 
                            disabled={isLoading}
                            type="submit" 
                            className={cn(
                                "bg-black hover:bg-black/70 rounded-full font-bold w-full",
                            )}
                        >
                            {"Créer compte"}
                        </Button>
                    </form>
                </motion.div>
                <Toaster />
            </Form>
        </>
    );
}
