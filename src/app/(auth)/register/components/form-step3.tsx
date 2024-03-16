import { z } from "zod";
import { registerSchema3 } from "../constants/types";
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
import { useRegisterStore } from "../constants/store";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FormStep3({
    next,
    previous,
    }: {
        next: () => void;
        previous: () => void;
    }) {

    const form = useForm<z.infer<typeof registerSchema3>>({
        resolver: zodResolver(registerSchema3),
        defaultValues: {
            firstname: "",
            lastname: "",
        }
    });
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries);
    const [selected, setSelected] = useState(false);

    function onSubmit(values: z.infer<typeof registerSchema3>) {
        updateRegisterStore(values);
        next();
    }

    return (
        <Form {...form}>
            <motion.div
                key={3}
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
                className="w-full"
            >
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
                                        className={{button: "bg-black"}} 
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
    );
}


