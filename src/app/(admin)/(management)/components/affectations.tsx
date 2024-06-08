"use client"
import * as React from "react"
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
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { number } from "zod"
import { Label } from "@radix-ui/react-label"
import { AlertDialogDemo } from "./Cardvol"
import { NavigationMenuDemo } from "./page slider"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"




const initialData: af[] = [
    {
        N: "1",
        Nom: "chelal",
        Prénom: "aicha",
        Email: "chellal2003@gmail.com",

    },
    {
        N: "2",
        Nom: "chelal",
        Prénom: "aicha",
        Email: "chellal2003@gmail.com",

    },
    {
        N: "1",
        Nom: "chelal",
        Prénom: "aicha",
        Email: "chellal2003@gmail.com",

    },
    {
        N: "3",
        Nom: "chelal",
        Prénom: "aicha",
        Email: "chellal2003@gmail.com",

    },
    {
        N: "4",
        Nom: "chelal",
        Prénom: "aicha",
        Email: "chellal2003@gmail.com",

    },
]

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
    const [data, setData] = React.useState<af[]>(initialData);

    const handleDelete = (id: string) => {
        const newData = data.filter(item => item.N !== id);
        setData(newData);
    };
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
                    <Select>
                        <SelectTrigger className="w-[100px] shadow-md">
                            <SelectValue placeholder="Vols" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Vols</SelectLabel>
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
        /////////////////////////////////////
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
        /////////////////////////////////////////////

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
                                onClick={() => navigator.clipboard.writeText(af.N)}
                            >
                                Copy  ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => handleDelete(af.N)}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]
    const table = useReactTable({
        data,
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
    })

    return (
        <>

            <div className="w-full  mt-[60px]">
                <div className="font-semibold ml-10 text-3xl mt-10 mb-[50px]">
                    Les Utilisateurs
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
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

