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
import { MoreHorizontal, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
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
import { NavigationMenuDemo } from "./page slider"
import { AlertDialogDemoh } from "./Cardhotel"


const initialData: htl[] = [
    {
        N: "1",
        Hotel: "alger",
        Adresse: "10-09-2024 a 16:00 h",

    },
    {
        N: "2",
        Hotel: "oran",
        Adresse: "10-09-2024 a 16:00 h",

    },

]

export type htl
    = {
        N: string
        Hotel: string
        Adresse: string

    }
function getData(): htl[] {
    return initialData;
}

const datav = getData();
console.log(datav);


export function DataTableDemoh() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [data, setData] = React.useState<htl[]>(initialData);

    const handleDelete = (id: string) => {
        const newData = data.filter(item => item.N !== id);
        setData(newData);
    };

    const columns: ColumnDef<htl
    >[] = [

            {
                accessorKey: "N",
                header: () => {
                    return (
                        <div className="text-black font-semibold">N</div>
                    )
                },
                cell: ({ row }) => <div className="capitalize font-medium">{row.getValue("N")}</div>,
            },

            //////////////////////
            {
                accessorKey: "Hotel",
                header: () => {
                    return (
                        <div className="text-black font-semibold ml-[50px]">Hotel</div>
                    )
                },
                cell: ({ row }) => <div className="lowercase font-medium ml-[50px]" >{row.getValue("Hotel")}</div>,
            },
            ////////////////////////////////////
            {
                accessorKey: "Adresse",
                header: () => {
                    return (
                        <div className="text-black font-semibold ml-[50px]">Adresse</div>
                    )
                },
                cell: ({ row }) => <div className="lowercase font-medium ml-[45px] text-end">{row.getValue("Adresse")}</div>,
            },

            {
                id: "actions",
                accessorKey: "actions",
                header: () => {
                    return (
                        <div className="text-black font-semibold ml-[550px]">actions</div>
                    )
                },
                enableHiding: false,
                cell: ({ row }) => {
                    const htl
                        = row.original

                    return (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0 ml-[550px]">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() => navigator.clipboard.writeText(htl
                                        .N)}
                                >
                                    Copy  ID
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleDelete(htl.N)}
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
        <div className="w-full mt-[60px]">
            <div className="font-semibold ml-10 text-3xl ">
                Vols et Hotels
            </div>
            <div className="flex items-center py-4 ">

                <div className="relative text-[#656565] ml-4">

                    <SearchIcon className="absolute ml-9   mt-2  font-thin	
" />
                    <Input
                        placeholder="Search"
                        value={(table.getColumn("Hotel")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("Hotel")?.setFilterValue(event.target.value)
                        }
                        className=" pr-3 pl-12 rounded-[30px] w-[900px] ml-5 mr-7"
                    />
                </div>
                <div className="mr-8">

                    <AlertDialogDemoh />
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
    )
}
