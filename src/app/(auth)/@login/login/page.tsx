"use client";
import { Rokkitt } from "next/font/google";

import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage 
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OAUTH_PROVIDERS } from "@/app/(auth)/actions/oauth";

const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

import { loginFormSchema } from "@/app/(auth)/constants/schemas";
import PasswordInput from "@/app/(auth)/components/password-input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUserStore } from "@/stores/user-store";

import BottomMessage from "@/app/(auth)/components/bottom-message";
import { Toaster } from "@/components/ui/toaster";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { endpoints, getUrl } from "@/constants/api";
import { useEmailStore } from "../../constants/email-store";
import { useDebouncedCallback } from "use-debounce";

export default function LoginPage() {
    const router = useRouter();

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
            persist: false,
        }
    });
    const [isLoginEnabled, setIsLoginEnabled] = useState(false);
    const { toast } = useToast();

    const setUser = useUserStore((state) => state.setUser);
    const [entries, setEntries] = useState({});
    const { isLoading } = useQuery({
        queryKey: ["login"],
        queryFn: async () => {
            try {
                setIsLoginEnabled(false);
                const response = await axios.post(getUrl(endpoints.login), entries);
                setUser(response.data);
                router.push(`/profile/${response.data.id}`);
                return response;
            } catch (error) {
                if (error instanceof AxiosError && error.response) {
                    toast({
                        title: "Identifiants incorrects",
                        description: "Veuillez réessayer",
                        variant: "destructive",
                    });
                } else {
                    toast({
                        title: "Erreur de connexion",
                        description: "Nous ne pouvons pas connecter au serveur",
                        variant: "destructive",
                    });
                }
            }
        },
        enabled: isLoginEnabled,
        retry: false,
    });
    const [email, setEmail] = useState("");
    const setEmailCallback = useDebouncedCallback((email: string) => setEmail(email), 200);
    const setStoreEmail = useEmailStore((state) => state.setEmail);
    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        setEntries({...values});
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center h-full w-full md:w-80 lg:w-[22rem] px-4 lg:px-0">
                <div className="flex flex-col gap-y-2 items-center justify-center">
                    <p className={cn(
                        "text-5xl font-bold",
                        rokkitt.className
                    )}>Bienvenue</p>
                    <p className="text-gray-400 text-center text-xs max-w-[40ch]">
                        Entrez votre adresse e-mail et votre mot de passe pour accéder à votre compte
                    </p>
                </div>
                <div className="flex-grow max-h-10"></div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-5">
                                    <FormLabel className="">Email</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Entrez votre email"
                                            className="rounded-full bg-gray-100 border-0"
                                            {...field}
                                            onChange={(e) => { setEmailCallback(e.target.value); field.onChange(e.target.value); }}
                                            disabled={isLoading}
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
                                <PasswordInput 
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    value={field.value}
                                    disabled={isLoading} />
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
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <FormLabel className="m-0 text-xs">Se souvenir de moi</FormLabel>
                                    </FormItem> 
                                )}
                            >
                            </FormField>
                            <Button variant={"link"} tabIndex={-1} onClick={() => { setStoreEmail(email); console.log(email); }}>
                                <Link href="/reset-password" className="text-xs">
                                    {"Mot de passe oublié?"}
                                </Link>
                            </Button>
                        </div>
                        <Button 
                            disabled={isLoading} 
                            type="submit" 
                            className={cn(
                                "bg-black text-white rounded-full mb-2 font-bold hover:bg-black/70",
                            )}
                        >
                            Connexion
                        </Button>
                    </form>
                </Form>
                <Button className="flex justify-center
                    w-full border rounded-full
                    hover:bg-transparent hover:border-slate-500
                    bg-white text-black "
                    disabled={isLoading}
                    onClick={() => {
                        setIsLoginEnabled(true);
                        OAUTH_PROVIDERS.google.login();
                        setIsLoginEnabled(false);
                    }}
                >
                    <div className="flex flex-row gap-x-2 items-center justify-center">
                        <FcGoogle />
                        <p>Connexion Avec Google</p>
                    </div>
                </Button>

                <div className="flex-grow max-h-12"></div>
                <BottomMessage 
                    prompt={"Vous n'avez pas de compte?"} 
                    link="/register"
                    action={"Inscrivez-vous"} 
                />
                <div className="flex-grow max-h-8"></div>
            </div>
            <Toaster />
        </>
    );
}

