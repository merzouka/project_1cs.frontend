"use client";
import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,

    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AlertDialogDemo } from "./Cardvol";
import { NavigationMenuDemo } from "./page slider";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/hooks/use-user";

export type vl = {
    N: string;
    Vols: string;
    Aéroport: string;
    Date_de_départ: string;
    Date_darrivée: string;
    Nombre_de_place: number;
};

export function DataTableDemo() {
    const { user } = useUser();
    const { data, isLoading, isError } = useQuery({
        staleTime: 5 * 60 * 1000,
        queryKey: ["flights", user.email],
        queryFn: async () => {
            const response = AxiosInstance.get(getUrl(endpoints.flights));
            return response.data.map(())
        }
    });

    const { toast } = useToast();

    useEffect(
        () => {
            if (isError) {
                toast({
                    description: "Nous ne pouvons pas récupérer les vols",
                    title: "Erreur de connexion",
                    variant: "destructive",
                });
            }
        }
    , [isError])
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const handleDelete = (id: string) => {
        const newData = data.filter(item => item.N !== id);
        setData(newData);
    };

    const columns: ColumnDef<vl>[] = [
        {
            accessorKey: "N",
            header: () => <div className="text-black font-semibold">N</div>,
            cell: ({ row }) => <div className="capitalize font-medium">{row.getValue("N")}</div>,
        },
        {
            accessorKey: "Vols",
            header: () => <div className="text-black font-semibold">Vols</div>,
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Vols")}</div>,
        },
        {
            accessorKey: "Aéroport",
            header: () => <div className="text-black font-semibold">Aéroport</div>,
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Aéroport")}</div>,
        },
        {
            accessorKey: "Date_de_départ",
            header: () => <div className="text-black font-semibold">Date de départ</div>,
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Date_de_départ")}</div>,
        },
        {
            accessorKey: "Date_darrivée",
            header: () => <div className="text-black font-semibold">Date d'arrivée</div>,
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Date_darrivée")}</div>,
        },
        {
            accessorKey: "Nombre_de_place",
            header: () => <div className="text-black font-semibold mr-3">Nombre de place</div>,
            cell: ({ row }) => <div className="lowercase font-medium">{row.getValue("Nombre_de_place")}</div>,
        },
        {
            id: "actions",
            accessorKey: "actions",
            header: () => <div className="text-black font-semibold">actions</div>,
            enableHiding: false,
            cell: ({ row }) => {
                const vl = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(vl.N)}
                            >
                                Copy ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => handleDelete(vl.N)}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    const table = useReactTable({
        data: data || [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
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
    });

    return (
        <>
            <div className="w-full mt-[60px]">
                <div className="font-semibold ml-10 text-3xl ">
                    Vols et Hotels
                </div>
                <div className="flex items-center py-4 ">
                    <div className="relative text-[#656565] ml-4">
                        <SearchIcon className="absolute ml-9 mt-2 font-thin" />
                        <Input
                            placeholder="Search"
                            value={(table.getColumn("Vols")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("Vols")?.setFilterValue(event.target.value)
                            }
                            className="pr-3 pl-12 rounded-[30px] w-[900px] ml-5 mr-7"
                        />
                    </div>
                    <div className="mr-8">
                        <AlertDialogDemo />
                    </div>
                </div>
                <div>
                    <NavigationMenuDemo />
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
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {
                                table.getRowModel().rows?.length ? (
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
                                                className="h-24 text-center font-bold text-2xl"
                                            >
                                                {
                                                    isLoading ? "Chargement...": (isError && "Erreur")
                                                }
                                            </TableCell>
                                        </TableRow>
                                    )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}
