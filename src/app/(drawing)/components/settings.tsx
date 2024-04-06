"use client";
import {
    Form,
    FormLabel,
    FormItem,
    FormControl,
    FormField,
    FormMessage
} from "@/components/ui/form";
import { 
    Select,
    SelectTrigger,
    SelectItem,
    SelectContent,
    SelectValue,
    SelectLabel
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    winners: z.number({ required_error: "Veuillez remplir le nombre de places." }),
    type: z.enum(["random", "age based"], { required_error: "Veuillez choisir le type du tirage." }),
});

export const Settings = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            winners: 0,
            type: undefined,
        }
    });

    function handleSubmit(values: z.infer<typeof formSchema>) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField 
                    control={form.control}
                    name="winners"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{"Nombre de places"}</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Veuillez entrer le nombre de places"
                                />
                                <FormMessage className="text-xs"/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel></FormLabel>
                            <FormControl>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Veuillez sélectionner le type de l'algorithm"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="random">{"Aléatoire"}</SelectItem>
                                            <SelectItem value="age based">{"Par tranche d'age"}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage className="text-xs"/>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
