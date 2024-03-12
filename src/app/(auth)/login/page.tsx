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

import { useForm } from "react-hook-form";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/app/(auth)/actions/credentials";
import Logo from "@/app/(auth)/components/logo";
import SideBanner from "@/app/(auth)/components/side-banner";
import { OAUTH_PROVIDERS } from "../actions/oauth";

const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

enum LoginError {
    WrongCredentials = "wrong credentials",
};

import { loginFormSchema } from "@/app/(auth)/register/constants/types";
import PasswordInput from "@/app/(auth)/components/password-input";

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
                                    <PasswordInput field={field} disabled={isLoginProcessing} />
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
                        onClick={async () => {
                            setIsLoginProcessing(true);
                            await OAUTH_PROVIDERS.google.login();
                            setIsLoginProcessing(false);
                        }}
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

