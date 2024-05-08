"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useUser } from "@/hooks/use-user";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { z } from "zod";
import { EditableInput } from "./editable-input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { isAxiosError } from "axios";
import { getRoleMap, useUserStore } from "@/stores/user-store";
import { PhoneInput } from "./phone-input";
import { ImagePicker } from "./image-picker";
import { Pages } from "@/constants/pages";

const formSchema = z.object({
    firstName: z.string({ required_error: "Veuillez saisir votre prénom." }),
    lastName: z.string({ required_error: "Veuillez saisir votre nom." }),
    email: z.string({ required_error: "Veuillez remplir votre email."}).email({
        message: "Veuillez saisir un email valide." 
    }),
    phone: z.string({
        required_error: "Veuillez saisir un numéro de téléphone valide." 
    }).regex(new RegExp(/[0-9]{7,}/), {
        message: "Veuillez saisir un numéro de téléphone valide.",
    }),
});

export const AdminProfileForm = ({ page }: { page: Pages }) => {
    const { user, validateAccess } = useUser();
    validateAccess(page);

    const setUser = useUserStore((state) => state.setUser);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone.includes("-") ? user.phone.split("-")[1] : user.phone,
        },
    });

    const { toast } = useToast();
    const [entries, setEntries] = useState<z.infer<typeof formSchema>>();
    const [phone, setPhone] = useState(user.phone);
    const [isFetching, setIsFetching] = useState(false);
    const { isLoading, failureCount, isError } = useQuery({
        queryKey: ["profile", "update"],
        enabled: isFetching,
        queryFn: async () => {
            try {
                setIsFetching(false);
                const response = await AxiosInstance.patch(getUrl(endpoints.profileUpdate), {
                    first_name: entries?.firstName,
                    last_name: entries?.lastName,
                    email: entries?.email,
                    image: image,
                    phone: phone,
                }, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    });
                setUser({
                    ...user,
                    firstName: entries?.firstName || user.firstName,
                    lastName: entries?.lastName || user.lastName,
                    phone: phone || user.phone,
                    role: getRoleMap(user.role) || "user",
                });
                setHasChanged(false);
                toast({
                    description: "Votre profile a été modifié avec succés.",
                });
                return response;
            } catch (error) {
                if (failureCount < 3) {
                    throw new Error("error");
                }
                if (isAxiosError(error) && error.response) {
                    toast({
                        description: "Cet email est déja utilisé.",
                        variant: "destructive",
                    });
                    throw new Error("invalid email");
                }
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas enregistrer vos modifications.",
                    variant: "destructive",
                });
                throw new Error("connection error");
            }
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setEntries(values);
        setIsFetching(true);
    }

    const [hasChanged, setHasChanged] = useState(false);
    const [image, setImage] = useState<File>();
    return (
        <div className="p-5 overflow-y-scroll">
            <ImagePicker 
                className="mx-5 mb-2"
                defaultImage={user.image}
                onChange={setImage}
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="md:row-span-2">
                    <div className={cn(
                        "flex flex-col w-full max-w-[33rem] items-stretch md:items-center justify-stretch gap-x-3",
                    )}>
                        <FormField 
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="mb-2 w-full">
                                    <FormLabel>{"Nom"}</FormLabel>
                                    <FormControl>
                                        <EditableInput 
                                            className="max-w-[33rem]"
                                            onChange={(value) => {
                                                setHasChanged(true);
                                                field.onChange(value);
                                            }}
                                            value={field.value}
                                            disabled={field.disabled}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="mb-2 w-full">
                                    <FormLabel>{"Prénom"}</FormLabel>
                                    <FormControl>
                                        <EditableInput 
                                            className="max-w-[33rem]"
                                            onChange={(value) => {
                                                setHasChanged(true);
                                                field.onChange(value);
                                            }}
                                            value={field.value}
                                            disabled={field.disabled}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>{"Email"}</FormLabel>
                                <FormControl>
                                    <div className="flex items-center gap-x-2 w-full max-w-[33rem] relative">
                                        <EditableInput 
                                            className="max-w-[33rem]"
                                            onChange={(value) => {
                                                setHasChanged(true);
                                                field.onChange(value);
                                            }}
                                            value={field.value}
                                            disabled={field.disabled}
                                        />
                                        <BsFillPatchCheckFill 
                                            className={cn(
                                                "absolute right-0 translate-x-[120%] md:translate-x-[150%]" ,
                                                user.emailVerified ? "text-emerald-400" : "text-slate-200",
                                            )} 
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <PhoneInput 
                                    onPhoneChange={(value) => {
                                        setHasChanged(true);
                                        setPhone(value);
                                    }}
                                    onPhoneNumberChange={field.onChange}
                                    phoneValue={field.value}
                                    disabled={field.disabled}
                                    control={(children) => (
                                        <FormControl>
                                            {children}
                                        </FormControl>
                                    )}
                                    styles={{
                                        container: "mb-2 md:mb-4"
                                    }}
                                />
                                <FormMessage className="text-xs"/>
                            </FormItem>
                        )}
                    />
                    <Button 
                        disabled={!hasChanged || isLoading || isError}
                        className="max-w-[33rem] bg-black hover:bg-black/75 w-full font-bold rounded-2xl"
                    >
                        {"Enregistrer"}
                    </Button>
                </form>
                <Toaster />
            </Form>
        </div>
    );
}
