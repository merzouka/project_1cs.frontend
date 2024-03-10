"use client";
import { Rokkitt } from "next/font/google";
import { Montserrat } from "next/font/google";

import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage 
} from "@/components/ui/form";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

import { FcGoogle } from "react-icons/fc";
import {
    Eye,
    EyeOff
} from "lucide-react";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
// import { BACKEND_URL } from "@/constants/apis";
// import { useRouter } from "next/navigation";
// import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";
import { login } from "@/app/(auth)/actions/auth";
import Logo from "@/app/(auth)/components/logo";
import SideBanner from "@/app/(auth)/components/side-banner";
// import { ToastAction } from "@radix-ui/react-toast";

const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const loginFormSchema = z.object({
    email: z.string().email({ message: "Adresse e-mail invalide." }),
    password: z.string()
    .min(8, { message: "8 caractères minimum requis." })
    .regex(new RegExp(
        /(?=[A-Z])/
    ), { message: "Mot de passe doit contenir une lettre majuscule." })
    .regex(new RegExp(
        /(?=[a-z])/
    ), { message: "Mot de passe doit contenir une lettre miniscule" })
    .regex(new RegExp(
        /(?=[0-9])/
    ), { message: "Mot de passe doit contenir un chiffre." }),
    persist: z.boolean().default(false),
});

enum LoginError {
    WrongCredentials = "wrong credentials",
};

export default function LoginPage() {
    // const router = useRouter();
    // const { toast } = useToast();

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
            persist: false,
        }
    });
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isLoginProcessing, setIsLoginProcessing] = useState(false);

    function onSubmit(values: z.infer<typeof loginFormSchema>) {
        setIsLoginProcessing(true);
        login(undefined).then(() => {
            setIsLoginProcessing(false);
        })
        console.log(values);
    }

    return (
        <div className={cn(
            "grid grid-cols-1 lg:grid-cols-2 | min-h-dvh | p-1 md:p-3",
            montserrat.className
        )}>
            <SideBanner />
            <div className="flex flex-col justify-center items-center
                w-full h-full
                px-8">
                <div className="flex flex-col justify-center items-center h-full">
                    <Logo />
                    <div aria-hidden className="flex-grow min-h-0 max-h-12"></div>
                    <div className="flex flex-col gap-y-2 items-center justify-center">
                        <p className={cn(
                            "text-5xl font-bold",
                            rokkitt.className
                        )}>Bienvenue</p>
                        <p className="text-gray-400 text-center text-xs max-w-[40ch]">
                            Entrez votre adresse e-mail et votre mot de passe pour accéder à votre compte
                        </p>
                    </div>
                    <div aria-hidden className="flex-grow min-h-0 max-h-10"></div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-5">
                                        <FormLabel className="text-xs">Email</FormLabel>
                                        <FormControl>
                                            <Input autoFocus type="text" placeholder="Entrez votre email"
                                                className="rounded-full text-xs bg-gray-100 border-0"
                                                {...field}
                                                disabled={isLoginProcessing}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-sm" />
                                    </FormItem> 
                                )}>
                            </FormField>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs">Mot de passe</FormLabel>
                                        <FormControl>
                                            <div className="
                                                flex items-center 
                                                px-1
                                                border border-slate-100 rounded-full
                                                focus-within:ring-2
                                                focus-within:ring-slate-950
                                                focus-within:ring-offset-2
                                                bg-gray-100
                                                ">
                                                <Input type={isPasswordHidden ? "password" : "text"} 
                                                    className="
                                                    text-xs
                                                    bg-transparent
                                                    border-0 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    placeholder="Entrez votre mot de passe"
                                                    {...field}
                                                    disabled={isLoginProcessing}
                                                />
                                                <Toggle 
                                                    className="rounded-full text-slate-500 hover:text-black 
                                                    data-[state=on]:text-black data-[state=on]:bg-transparent
                                                    bg-transparent hover:bg-transparent"
                                                    size="sm" 
                                                    onPressedChange={() => setIsPasswordHidden(!isPasswordHidden)}>
                                                    {isPasswordHidden ? <Eye /> : <EyeOff />}
                                                </Toggle>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem> 
                                )}>
                            </FormField>
                            <div className="flex justify-between items-center mb-3">
                                <FormField
                                    control={form.control}    
                                    name="persist"
                                    render={({ field }) => (
                                        <FormItem className="space-y-0 flex flex-row gap-x-2 items-center justify-center">
                                            <FormControl>
                                                <Checkbox 
                                                    className="border-slate-300 rounded-[5px]"
                                                    checked={field.value} 
                                                    onCheckedChange={field.onChange}
                                                    disabled={isLoginProcessing}
                                                />
                                            </FormControl>
                                            <FormLabel className="m-0 text-xs">Se souvenir de moi</FormLabel>
                                        </FormItem> 
                                    )}
                                >
                                </FormField>
                                <Button variant={"link"}>
                                    <Link href="/forgot-password" className="text-xs">
                                        Mot de passe oubli&eacute;?
                                    </Link>
                                </Button>
                            </div>
                            <Button disabled={isLoginProcessing} type="submit" className="bg-black text-white rounded-full mb-2 font-bold">
                                Connexion
                            </Button>
                        </form>
                    </Form>
                    <Button className="flex justify-center
                        w-full border rounded-full
                        hover:bg-transparent hover:border-slate-500
                        bg-white text-black "
                        disabled={isLoginProcessing}
                    >
                        <div className="flex flex-row gap-x-2 items-center justify-center">
                            <FcGoogle />
                            <p>Connexion Avec Google</p>
                        </div>
                    </Button>

                    <div aria-hidden className="flex-grow min-h-0 max-h-12"></div>
                    <p className="text-xs">
                        Vous n'avez pas de compte? 
                        <Button variant="link" className="font-bold text-black text-base">
                            <Link className="text-xs" href="/register">Inscrivez-vous</Link>
                        </Button>
                    </p>
                    <div aria-hidden className="flex-grow min-h-0 max-h-8"></div>
                </div>
            </div>
        </div>
    );
}

