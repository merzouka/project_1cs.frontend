"use client";
import Link from "next/link";

import Logo from "@/app/(auth)/components/logo";
import SideBanner from "@/app/(auth)/components/side-banner";
import { cn } from "@/lib/utils";
import {
    Form, 
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";

import { Rokkitt, Montserrat } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FcGoogle } from "react-icons/fc";

const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const registerFormSchema = z.object({

});

export default function RegisterPage() {
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            email: "",
            password: "",
            persist: false,
        }
    });
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    function onSubmit(values: z.infer<typeof registerFormSchema>) {

    }

    return (
        <div className="
            grid grid-cols-1 md:grid-cols-2 place-items-center |
            min-h-dvh |
            p-1 md:p-3
            ">
            <div className="
                flex justify-center items-center
                h-full w-full
            ">
                <div className="flex flex-col justify-center items-center h-full">
                    <Logo />
                    <div aria-hidden className="flex-grow min-h-0 max-h-12"></div>
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <p className={cn(
                            "text-4xl font-bold",
                            rokkitt.className
                        )}>Vos informations</p>
                    </div>
                    <div aria-hidden className="flex-grow min-h-0 max-h-10"></div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col"></form>
                    </Form>
                    <Button className="flex justify-center
                        w-full border rounded-full
                        hover:bg-transparent hover:border-slate-500
                        bg-white text-black "
                    >
                        <div className="flex flex-row gap-x-2 items-center justify-center">
                            <FcGoogle />
                            <p>S'inscrire Avec Google</p>
                        </div>
                    </Button>

                    <div aria-hidden className="flex-grow min-h-0 max-h-12"></div>
                    <p className="text-xs">
                        Vous avez d&eacute;ja un compte?
                        <Button variant="link"  className="font-bold text-black text-base">
                            <Link className="text-xs" href="/register">Connectez-vous</Link>
                        </Button>
                    </p>
                    <div aria-hidden className="flex-grow min-h-0 max-h-8"></div>
                </div>
            </div>
            <SideBanner />
        </div>
    );
}
