"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  FilterFn,
} from "@tanstack/react-table";
import Input from '@/components/form/input/InputField';



// ----- Interface -----
interface User {
  id: number;
  name: string;
  email: string;
}

// Custom global filter (cek semua kolom)
const globalFilterFn: FilterFn<User> = (row, columnId, filterValue) => {
  const search = String(filterValue).toLowerCase();

  const values = Object.values(row.original)
    .map((val) => (val ? String(val) : ""))
    .join(" ")
    .toLowerCase();

  return values.includes(search);
};

export default function UsersTable() {
  const [data, setData] = useState<User[]>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // ----- Fetch dari API -----
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const users = await res.json();
        setData(users || []);
      } catch (err) {
        console.error("Error fetch users:", err);
      }
    };
    fetchUsers();
  }, []);

  // ----- Definisi kolom -----
  const columns = useMemo<ColumnDef<User>[]>(() => [
    {
      id: "no",
      header: "No",
      cell: ({ row }) => row.index + 1, // otomatis nomor urut
    },
    {
      accessorKey: "name",
      header: "Nama",
      cell: ({ row }) => (
        <span className="font-medium text-gray-800 dark:text-white/90">
          {row.original.name}
        </span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      id: "actions",
      header: "Opsi",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() => console.log("Edit:", row.original.id)}
            className="px-2 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => console.log("Hapus:", row.original.id)}
            className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600"
          >
            Hapus
          </button>
        </div>
      ),
    },
  ], []);


  // ----- Table instance -----
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn,
  });

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
      {/* Search */}
      <div className="w-full md:w-1/3">
        <Input
          type="text"
          placeholder="Search in all columns..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="mb-3 w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    <div
                      className="flex items-center gap-1 cursor-pointer select-none"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          {/* Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-3 text-theme-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
