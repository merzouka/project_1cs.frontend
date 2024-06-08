"use client";
import { useRegionSelect } from "@/app/components/hooks/use-region-select";
import { ProvinceSelect } from "@/app/components/province-select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Toggle } from "@/components/ui/toggle";
import { icons } from "@/constants/icons";
import { useUser } from "@/hooks/use-user";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { z } from "zod";
import { EditableInput } from "./editable-input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { AxiosInstance } from "@/config/axios";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { isAxiosError } from "axios";
import { getRoleMap, useUserStore } from "@/stores/user-store";
import { CitySelect } from "@/app/components/city-select";
import { PhoneInput } from "./phone-input";
import { ImagePicker } from "./image-picker";
import { Pages } from "@/constants/pages";
import { getCityName, getCityNameId } from "@/constants/cities";
import { ProfileFormSkeleton } from "./profile-form-skeleton";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    firstName: z.string({ required_error: "Veuillez saisir votre prénom." }),
    lastName: z.string({ required_error: "Veuillez saisir votre nom." }),
    email: z.string({ required_error: "Veuillez remplir votre email."}).email({
        message: "Veuillez saisir un email valide." 
    }),
    city: z.string({
        required_error: "Veuillez spécifier votre commune." 
    }).regex(new RegExp(/[0-9]+/), {
        message: "Veuillez spécifier votre commune."
    }),
    province: z.string({
        required_error: "Veuillez spécifier votre wilaya." 
    }).regex(new RegExp(/[0-9]+/), {
        message: "Veuillez spécifier votre wilaya.",
    }),
    phone: z.string({
        required_error: "Veuillez saisir un numéro de téléphone valide." 
    }).regex(new RegExp(/[0-9]{7,}/), {
        message: "Veuillez saisir un numéro de téléphone valide.",
    }),
});
export const ProfileForm = ({ page }: { page: Pages }) => {
    const { user, useValidateAccess: validateAccess } = useUser();
    const { isLoading } = validateAccess(page);

    const setUser = useUserStore((state) => state.setUser);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            city: `${user.city}`,
            province: `${user.province || ""}`,
            phone: user.phone.includes("-") ? user.phone.split("-")[1] : user.phone,
        }
    });

    const { toast } = useToast();
    const [phone, setPhone] = useState(user.phone);
    const queryClient = useQueryClient();
    const { isPending: isProfileUpdateLoading, mutate: profileMutate } = useMutation({
        retry: 3,
        mutationFn: async (entries: z.infer<typeof formSchema>) => {
            const response = await AxiosInstance.patch(getUrl(endpoints.profileUpdate), {
                first_name: entries?.firstName,
                last_name: entries?.lastName,
                city: getCityName(Number(entries?.city)),
                email: entries?.email,
                image: image,
                phone: phone || user.phone,
            }, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
            return response.data;
        },
        onMutate: (entries: z.infer<typeof formSchema>) => {
            setUser({
                ...user,
                firstName: entries?.firstName || user.firstName,
                lastName: entries?.lastName || user.lastName,
                city: Number(entries?.city) || user.city,
                province: Number(entries?.province) || user.province,
                phone: phone || user.phone,
                role: getRoleMap(user.role) || "user",
                image: imageSrc,
            });
            return user;
        },
        onSuccess: (data) => {
            setUser({
                ...user,
                firstName: data.first_name,
                lastName: data.last_name,
                city: getCityNameId(data.city),
                province: data.province,
                phone: data.phone,
                role: getRoleMap(data.role) || "user",
                image: data.personal_picture,
            });
            queryClient.setQueryData(["profile"], data);
            setHasChanged(false);
            toast({
                description: "Votre profile a été modifié avec succés.",
            });
        },
        onError: (error, _, context) => {
            setUser({
                ...user,
                firstName: context?.firstName || user.firstName,
                lastName: context?.lastName || user.lastName,
                city: context?.city || user.city,
                province: context?.province || user.province,
                phone: context?.phone || user.phone,
                role: getRoleMap(context?.role || user.role),
                image: context?.image || user.image,
            }); 
            if (isAxiosError(error) && error.response) {
                toast({
                    description: "Cet email est déja utilisé.",
                    variant: "destructive",
                });
            }
            toast({
                title: "Erreur de connexion",
                description: "Nous ne pouvons pas enregistrer vos modifications.",
                variant: "destructive",
            });
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        profileMutate(values);
    }

    const {
        province,
        handleProvinceChange,
        handleCityChange 
    } = useRegionSelect(user.province);
    const [disableRegion, setDisableRegion] = useState(true);
    const [hasChanged, setHasChanged] = useState(false);
    const [image, setImage] = useState<File>();
    const [imageSrc, setImageSrc] = useState<string | undefined>(user.image);
    return (
        <>
            {
                isLoading ? <ProfileFormSkeleton /> :
                    <div className="p-5 overflow-y-scroll">
                        <ImagePicker 
                            className="mx-5 mb-2"
                            imageSrc={user.image || imageSrc}
                            onImageSrcChange={setImageSrc}
                            onImageChange={(image) => {
                                setHasChanged(true);
                                setImage(image);
                            }}
                        />
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="md:row-span-2 px-5 pt-5">
                                <div className="grid grid-flow-col grid-rows-4 grid-cols-1 md:grid-cols-2 gap-x-12 items-start justify-center mb-2 md:mb-6">
                                    <FormField 
                                        name=""
                                        render={({ }) => (
                                            <FormItem className="mb-2 pt-2">
                                                <FormLabel>
                                                    {"Identifiant partageable"}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        disabled
                                                        className={cn(
                                                            "max-w-[33rem] rounded-xl bg-slate-100 border border-slate-300 text-slate-300",
                                                            "disabled:bg-slate-100 disabled:text-slate-500 disabled:opacity-100 disabled:cursor-default",
                                                        )}
                                                        value={user.id}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
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
                                    <div className="row-span-3">
                                        <span className="text-sm font-medium mb-2 block">
                                            {"Région"}
                                        </span>
                                        <div className={cn(
                                            "p-2 md:p-4 md:pt-5 pt-5 border border-slate-300 rounded-2xl flex-grow max-w-[33rem] relative",
                                            "mb-2 md:mb-3"
                                        )}>
                                            <div className="flex items-center justify-end absolute top-0 right-2">
                                                <Toggle 
                                                    onPressedChange={() => setDisableRegion(!disableRegion)}
                                                    size={"sm"}
                                                    className="bg-transparent hover:bg-transparent [state=on]:text-black text-slate-400
                                                    data-[state=on]:bg-transparent"
                                                >
                                                    {icons.modify("size-5")}
                                                </Toggle>
                                            </div>
                                            <FormField 
                                                control={form.control}
                                                name="province"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{"Wilaya"}</FormLabel>
                                                        <ProvinceSelect
                                                            onChange={handleProvinceChange((value) => {
                                                                setHasChanged(true);
                                                                field.onChange(value);
                                                            })}
                                                            defaultValue={`${field.value}`}
                                                            control={(children) => (
                                                                <FormControl>
                                                                    {children}
                                                                </FormControl>
                                                            )}
                                                            disabled={disableRegion}
                                                            className="rounded-xl"
                                                        />
                                                        <FormMessage className="text-xs" />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField 
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{"Commune"}</FormLabel>
                                                        <CitySelect
                                                            onChange={handleCityChange((value) => {
                                                                setHasChanged(true);
                                                                field.onChange(value);
                                                            })}
                                                            province={province || user.province}
                                                            defaultValue={`${field.value}`}
                                                            control={(children) => (
                                                                <FormControl>
                                                                    {children}
                                                                </FormControl>
                                                            )}
                                                            disabled={disableRegion}
                                                            className="rounded-xl"
                                                        />
                                                        <FormMessage className="text-xs" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <Button 
                                    disabled={!hasChanged || isProfileUpdateLoading}
                                    className="max-w-[33rem] bg-black hover:bg-black/75 w-full font-bold rounded-2xl"
                                >
                                    {"Enregistrer"}
                                </Button>
                            </form>
                            <Toaster />
                        </Form>
                    </div>
            }
        </>
    );
}
