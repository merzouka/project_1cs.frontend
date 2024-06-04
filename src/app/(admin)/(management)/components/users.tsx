"use client";
import { 
    TableHeader,
    Table,
    TableHead,
    TableRow,
    TableBody,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { ErrorDisplay } from "@/app/components/error-display";
import { UserRow, User } from "./user-row";

export const Users = (
    {
        users,
        isError,
    }: {
        users: User[];
        isError?: boolean;
    }
) => {

    const { toast } = useToast();
    useEffect(() => {
        if (isError) {
            toast({
                title: "Erreur de connexion",
                description: "Nous ne pouvons pas récupérer le utilisateurs",
                variant: "destructive",
            });
        }
    }, [isError]);

    return (
        <div className="p-3 border border-slate-100 rounded-xl flex-grow flex flex-col items-center justify-between">
            <Table className="h-full">
                <TableHeader>
                    <TableRow>
                        <TableHead>{"N"}</TableHead>
                        <TableHead>{"Nom"}</TableHead>
                        <TableHead>{"Prénom"}</TableHead>
                        <TableHead>{"Email"}</TableHead>
                        <TableHead>{"Role"}</TableHead>
                        <TableHead>{"Wilaya"}</TableHead>
                        <TableHead>{"Communes"}</TableHead>
                        <TableHead>{"Action"}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        users?.map((user, index) => <UserRow key={user.id} info={user} index={index}/>)
                    }
                </TableBody>
            </Table>
            {isError && 
                <ErrorDisplay text={"Nous ne pouvons pas récupérer les utilisateurs."} />
            }
        </div>
    );
}
