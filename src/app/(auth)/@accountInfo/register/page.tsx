"use client";
import { z } from "zod";
import { registerSchema3 } from "@/app/(auth)/constants/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { 
    Form,
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
    Select,
    SelectTrigger,
    SelectItem,
    SelectValue,
    SelectContent
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputCalendar } from "@/components/ui/input-calendar";
import { useRegisterStore } from "@/app/(auth)/stores/register-store";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";

// animations
import { slideInLeftExitRight, slideInRightExitLeft } from "@/constants/animations";
// fonts
import { rokkitt } from "@/constants/fonts";

export default function Step() {
    const entries = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof registerSchema3>>({
        resolver: zodResolver(registerSchema3),
        defaultValues: {
            firstname: entries.firstname || "",
            lastname: entries.lastname || "",
            dateOfBirth: entries.dateOfBirth || undefined,
            gender: entries.gender || undefined,
        }
    });
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries);
    const [selected, setSelected] = useState(!!entries.gender);
    const { next, direction } = useMultiStep(MultiStepKeys.register);
    function onSubmit(values: z.infer<typeof registerSchema3>) {
        updateRegisterStore({
            ...values,
            dateOfBirth: values.dateOfBirth || new Date(),
        });
        next();
    }
    const animation = direction == "forward" ? slideInRightExitLeft : slideInLeftExitRight;
    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold mb-1 lg:mb-3",
                "text-center",
                rokkitt.className
            )}
                key="account-info-header"
                {...animation}
            >
                {"Vos informations"}
            </motion.p>
            <motion.p 
                key="account-info-subheader"
                className="text-gray-400 max-w-[38ch] text-center text-sm"
                {...animation}
            >
                {"Entrez les détails nécessaires pour continuer."}
            </motion.p>
            <div className="flex-grow max-h-6"></div>
            <Form {...form}>
                <motion.div
                    key="account-info-form"
                    {...animation}
                    className="w-full flex items-center justify-center" 
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-80 lg:w-[22rem]">
                        <FormField 
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem className="mb-2">
                                    <FormLabel>Nom*</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="Entrez votre nom"
                                            className="bg-transparent border border-slate-300 rounded-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem className="mb-2">
                                    <FormLabel>Pr&eacute;nom*</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-transparent border border-slate-300 rounded-full"
                                            placeholder="Entrez votre prénom"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem className="mb-2">
                                    <FormLabel>Date de naissance*</FormLabel>
                                    <FormControl>
                                        <InputCalendar 
                                            styles={{ button: "[&>span]:text-slate-500" }}
                                            value={field.value}
                                            onChange={field.onChange} 
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="mb-5">
                                    <FormLabel>Sexe*</FormLabel>
                                    <Select onValueChange={(value) => {
                                        setSelected(true);
                                        field.onChange(value);
                                    }} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className={cn(
                                                "rounded-full border-slate-300 text-gray-500",
                                                selected && "text-black"
                                            )}>
                                                <SelectValue placeholder="Sélectionnez votre sexe"/>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className={cn(
                            "rounded-full bg-black hover:bg-black/70 w-full font-bold",
                        )}>
                            Continuer
                        </Button>
                    </form>
                </motion.div>
            </Form>
        </>
    );
}
