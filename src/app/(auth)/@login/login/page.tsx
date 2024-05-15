"use client";
// fonts
import { rokkitt } from "@/constants/fonts"; 

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

import { loginFormSchema } from "@/app/(auth)/constants/schemas";
import PasswordInput from "@/app/(auth)/components/password-input";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Role, getRole, useUserStore } from "@/stores/user-store";

import BottomMessage from "@/app/(auth)/components/bottom-message";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { AxiosError, isAxiosError } from "axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { useEmailStore } from "../../constants/email-store";
import { useDebouncedCallback } from "use-debounce";
import { AxiosInstance } from "@/config/axios";
import { getCityNameId } from "@/constants/cities";

function routeByRole(role: string) {
    switch (getRole(role)) {
        case Role.haaj:
            return "/";
        case Role.user:
            return "/";
        case Role.paymentManager:
            return "/profile/payment-manager";
        case Role.drawingManager:
            return "/profile/drawing-manager";
        case Role.doctor:
            return "/profile/doctor";
        case Role.admin:
            return "/profile/admin";
        default:
            throw new Error("invalid role");
    }
}

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnPage = searchParams.get("return");

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
            persist: false,
        }
    });
    const { toast } = useToast();

    const setUser = useUserStore((state) => state.setUser);
    const queryClient = new QueryClient();
    const { isPending: isLoginingIn, mutate } = useMutation({
        mutationFn: async (values: z.infer<typeof loginFormSchema>) => {
            const response = await AxiosInstance.post(getUrl(endpoints.login), values, {
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: async (data) => {
            await  queryClient.cancelQueries({ queryKey: ["profile"] });
            queryClient.setQueryData(["profile"], data);
            const loggedInUser = {
                role: data.role,
                email: data.email,
                firstName: data.first_name,
                lastName: data.last_name,
                dateOfBirth: new Date(data.dateOfBirth),
                phone: data.phone,
                province: data.province,
                city: getCityNameId(data.city),
                gender: data.gender == "M" ? "male" : "female",
                image: data?.personal_picture || undefined,
                emailVerified: data?.is_email_verified || false,
                isLoggedIn: true,
            };

            /* @ts-ignore impossible invalid values */
            setUser(loggedInUser);
            if (returnPage && returnPage != "profile") {
                router.push(returnPage);
                return data;
            }
            router.push(routeByRole(data.role))
        },
        onError: (error: AxiosError | Error) => {
            if (isAxiosError(error) && error.response) {
                toast({
                    title: "Identifiants incorrects",
                    description: "Veuillez réessayer",
                    variant: "destructive",
                });
                return;
            }
            toast({
                title: "Erreur de connexion",
                description: "Nous ne pouvons pas connecter au serveur",
                variant: "destructive",
            });
        }
    })
    const [email, setEmail] = useState("");
    const setEmailCallback = useDebouncedCallback((email: string) => setEmail(email), 200);
    const setStoreEmail = useEmailStore((state) => state.setEmail);
    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        mutate(values);
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
                        {"Entrez votre adresse e-mail et votre mot de passe pour accéder à votre compte"}
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
                                            disabled={isLoginingIn}
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
                                    disabled={isLoginingIn} />
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
                                                disabled={isLoginingIn}
                                            />
                                        </FormControl>
                                        <FormLabel className="m-0 text-xs">Se souvenir de moi</FormLabel>
                                    </FormItem> 
                                )}
                            >
                            </FormField>
                            <Button variant={"link"} tabIndex={-1} onClick={() => setStoreEmail(email)} type="button">
                                <Link href="/reset-password-email" className="text-xs">
                                    {"Mot de passe oublié?"}
                                </Link>
                            </Button>
                        </div>
                        <Button 
                            disabled={isLoginingIn} 
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
                    disabled={isLoginingIn}
                    onClick={() => {
                        OAUTH_PROVIDERS.google.login();
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
                    params={searchParams}
                />
                <div className="flex-grow max-h-8"></div>
            </div>
            <Toaster />
        </>
    );
}

