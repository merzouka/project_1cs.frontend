"use client"
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/hooks/use-user";
import { useToast } from "@/components/ui/use-toast";
import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { AxiosInstance } from "@/config/axios";

export type af = {
    N: string,
    Nom: string,
    Prénom: string,
    Email: string,
}

export function DataTableDemoaf() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const columns: ColumnDef<af>[] = [

        {
            accessorKey: "N",
            header: () => {
                return (
                    <div className="text-black font-semibold">N</div>
                )
            },
            cell: ({ row }) => <div className="capitalize font-medium">{row.getValue("N")}</div>,
        },
        {
            accessorKey: "Nom",
            header: () => {
                return (
                    <div className="text-black font-semibold">Nom</div>
                )
            },
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Nom")}</div>,
        },
        {
            accessorKey: "Prénom",
            header: () => {
                return (
                    <div className="text-black font-semibold">Prénom</div>
                )
            },
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Prénom")}</div>,
        },
        {
            accessorKey: "Email",
            header: () => {
                return (
                    <div className="text-black font-semibold">Email</div>
                )
            },
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Email")}</div>,
        },
        {
            id: "Vols",
            accessorKey: "Vols",
            header: () => {
                return (
                    <div className="text-black font-semibold">Vols</div>
                )
            },
            enableHiding: false,
            cell: ({ row }) => {
                const af = row.original

                return (
                    <Select defaultValue={row.getValue('flight')?.id}>
                        <SelectTrigger className="w-[100px] shadow-md" disabled={!flights}>
                            <SelectValue placeholder="Vols" />
                        </SelectTrigger>
                        <SelectContent>
                            {flights?.map((flight) => (
                                <SelectItem key={flight.id} value={flight.id}>{flight.nom}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                )
            },
        },
        {
            id: "Hotels",
            accessorKey: "Hotels",
            header: () => {
                return (
                    <div className="text-black font-semibold">Hotels</div>
                )
            },
            enableHiding: false,
            cell: ({ row }) => {
                const af = row.original

                return (
                    <Select>
                        <SelectTrigger className="w-[100px] shadow-md">
                            <SelectValue placeholder="Hotels" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Hotels</SelectLabel>
                                <SelectItem value="oran">oran</SelectItem>
                                <SelectItem value="alger">alger</SelectItem>
                                <SelectItem value="annaba">annaba</SelectItem>
                                <SelectItem value="bechar">bechar</SelectItem>
                                <SelectItem value="tlemcen">tlemcen</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )
            },
        },
        {
            id: "actions",
            accessorKey: "actions",
            header: () => {
                return (
                    <div className="text-black font-semibold">actions</div>
                )
            },
            enableHiding: false,
            cell: ({ row }) => {
                const af = row.original

                return (
                    <Button className="rounded-full">
                        {"Sauvegarder"}
                    </Button>
                )
            },
        },
    ]

    const { user } = useUser();
    const { toast } = useToast();
    const { data: hodjadj, isLoading: isHadjFetching } = useQuery({
        retry: 0,
        queryKey: ["bookings", "hodjadj", user.email],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.getHodjadj));
                return response.data.map((hadj: {
                    id: number;
                    email: string;
                    firstName: string;
                    lastName: string;
                    flight?: {
                        id: number;
                        name: string;
                    },
                    hotel?: {
                        id: number;
                        name: string;
                    },
                }, index: number) => ({
                    N: index,
                    Nom: hadj.lastName,
                    Prénom: hadj.firstName,
                    Email: hadj.email,
                    flight: hadj.flight ? { id: hadj.flight.id, name: hadj.flight.name, } : undefined,
                    hotel: hadj.hotel ? { id: hadj.hotel.id, name: hadj.hotel.name, } : undefined,
                }));
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récupérer les pélèrins.",
                    variant: "destructive",
                });
            }
        }
    });

    console.log(hodjadj);
    const { data: flights, isLoading: isFlightsFetching } = useQuery({
        retry: 0,
        queryKey: ["bookings", "flights"],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.flights));
                return response.data.map((flight: any) => ({
                    id: flight.id,
                    name: flight.nom,
                }));
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récupérer les pélèrins.",
                    variant: "destructive",
                });
            }
        }
    });

    const { data: hotels, isLoading: isHotelsFetching } = useQuery({
        retry: 0,
        queryKey: ["bookings", "flights"],
        queryFn: async () => {
            try {
                const response = await AxiosInstance.get(getUrl(endpoints.hotels));
                return response.data.map((hotel: any) => ({
                    id: hotel.id,
                    name: hotel.nom,
                }));
            } catch (error) {
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas récupérer les pélèrins.",
                    variant: "destructive",
                });
            }
        }
    });
    const table = useReactTable({
        data: hodjadj || [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <>

            <div className="w-full  mt-[60px]">
                <div className="font-semibold ml-10 text-3xl mt-10 mb-[50px]">
                    Les pélèrins
                </div>


                <div className="rounded-[25px] mr-8 ml-8 border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

