"use client";
import { 
    Form,
    FormItem,
    FormField,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import {
    Select,
    SelectValue,
    SelectContent,
    SelectTrigger
} from "@/components/ui/select";
import { useUser } from "@/hooks/use-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    firstName: z.string({ required_error: "Veuillez saisir votre prénom." }),
    lastName: z.string({ required_error: "Veuillez saisir votre nom." }),
    email: z.string({ required_error: "Veuillez remplir votre email."}).email({
        message: "Veuillez saisir un email valide." 
    }),
    city: z.string({ required_error: "Veuillez spécifier votre commune." }),
    province: z.number({ required_error: "Veuillez spécifier votre wilaya." }),
});

export const ProfileForm = () => {
    const { user } = useUser();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            city: user.city,
            province: user.province,
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            </form>
        </Form>
    );
}
