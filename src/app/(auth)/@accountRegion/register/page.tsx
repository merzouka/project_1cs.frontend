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
import { useForm } from "react-hook-form";
import { useRegisterStore } from "@/app/(auth)/stores/register-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";

// fonts
import { rokkitt } from "@/constants/fonts";

import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";
import { slideInRightExitLeft, slideInRightExitRight } from "@/constants/animations";
import { format } from "date-fns";
import { useErrorStore } from "../../stores/register-error-store";
import { ProvinceSelect } from "@/app/components/province-select";
import { useRegionSelect } from "@/app/components/hooks/use-region-select";
import { CitySelect } from "@/app/components/city-select";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Step() {
    const searchParams = useSearchParams();

    const entries = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof registerSchema4>>({
        resolver: zodResolver(registerSchema4),
        defaultValues: {
            province: entries.province ? `${entries.province}` : "",
            city: entries.city || "",
        }
    });
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries);
    const [isRegisterProcessing, setIsRegisterProcess] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const { setStep } = useMultiStep(MultiStepKeys.register);
    const setEmailError = useErrorStore((state) => state.setErrors);
    const { isLoading } = useQuery({
        queryKey: ["register"],
        queryFn: async () => {
            try {
                setIsRegisterProcess(false);
                const response = await axios.post(getUrl(endpoints.register), {
                    email: entries.email,
                    phone: entries.phone,
                    password: entries.password,
                    first_name: entries.firstname,
                    last_name: entries.lastname,
                    dateOfBirth: entries.dateOfBirth ? format(entries.dateOfBirth, "yyyy-MM-dd"): new Date(),
                    gender: entries.gender == "male" ? "M" : "F",
                    province: Number(entries.province),
                    city: entries.city,
                });
                setStep(0);
                updateRegisterStore({
                    email: "",
                    phone: "",
                    password: "",
                    firstname: "",
                    lastname: "",
                    dateOfBirth: undefined,
                    gender: undefined,
                    province: undefined,
                    city: "",
                });
                router.push(`/login?${searchParams.toString()}`);
                return response.data;
            } catch (error) {
                if (error instanceof AxiosError && error.response) {
                    setEmailError({ email: "Adresse e-mail déjà utilisée" })
                    setStep(0);
                    throw new Error("duplicate email");
                }
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
        staleTime: 0,
    });
    async function onSubmit(values: z.infer<typeof registerSchema4>) {
        console.log(values);
        updateRegisterStore({
            ...values,
            province: Number(values.province)
        });
        setIsRegisterProcess(true);
    }

    const { direction } = useMultiStep(MultiStepKeys.register);
    const animation = direction == "forward" ? slideInRightExitLeft : slideInRightExitRight;
    const { province, handleProvinceChange, handleCityChange } = useRegionSelect(entries.province);
    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="account-region-header"
                {...animation}
            >
                {"Vos informations"}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="account-region-form"
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
                                    <ProvinceSelect 
                                        onChange={handleProvinceChange(field.onChange)}
                                        defaultValue={field.value !== undefined ? `${field.value}` : ""}
                                        disabled={isLoading}
                                        className="rounded-full"
                                        control={(children) => (
                                            <FormControl>
                                                {children}
                                            </FormControl>
                                        )}
                                    />
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
                                    <CitySelect 
                                        onChange={handleCityChange(field.onChange)}
                                        defaultValue={field.value}
                                        disabled={isLoading}
                                        province={province}
                                        control={(children) => (
                                            <FormControl>
                                                {children}
                                            </FormControl>
                                        )}
                                        className="rounded-full"
                                    />
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
