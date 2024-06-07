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
import { UserRow, User, UserRowSkeleton } from "./user-row";
import { Spinner } from "@/components/custom/spinner";

export const Users = (
    {
        users,
        isError,
        isLoading
    }: {
        users?: User[];
        isError?: boolean;
        isLoading?: boolean;
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
        <div className="p-3 border border-slate-100 rounded-xl flex-grow flex flex-col items-center justify-between relative overflow-clip">
            <div className="top-0 right-0 bottom-0 left-0 absolute overflow-scroll p-2">
                <Table className="h-full">
                    <TableHeader className="sticky">
                        <TableRow>
                            <TableHead className="text-black">{"N"}</TableHead>
                            <TableHead className="text-black">{"Nom"}</TableHead>
                            <TableHead className="text-black">{"Prénom"}</TableHead>
                            <TableHead className="text-black">{"Email"}</TableHead>
                            <TableHead className="text-black">{"Role"}</TableHead>
                            <TableHead className="text-black">{"Wilaya"}</TableHead>
                            <TableHead className="text-black">{"Communes"}</TableHead>
                            <TableHead className="text-black">{"Action"}</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                        !isError && !isLoading && users &&
                            <TableBody>
                                {
                                    users?.map((user, index) => <UserRow key={user.id} info={user} index={index}/>)
                                }
                            </TableBody>
                    }
                    {
                        isLoading && 
                            Array(7).fill(null).map(_ => (
                                <UserRowSkeleton />
                            ))
                    }
                </Table>
            </div>
            {isError && 
                <ErrorDisplay text={"Nous ne pouvons pas récupérer les utilisateurs."} />
            }
        </div>
    );
}
