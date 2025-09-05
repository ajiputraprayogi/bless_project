"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";

interface User {
  id: number;
  name: string;
  email: string;
}

// Custom global filter
const globalFilterFn: FilterFn<User> = (row, columnId, filterValue) => {
  const search = String(filterValue).toLowerCase();
  const values = Object.values(row.original)
    .map((val) => (val ? String(val) : ""))
    .join(" ")
    .toLowerCase();
  return values.includes(search);
};

export default function UsersTable() {
  const router = useRouter();
  const [data, setData] = useState<User[]>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  // Fetch data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const users = await res.json();
        setData(users || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  // Columns
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: "no",
        header: "No",
        cell: ({ row }) =>
          row.index + 1 + pagination.pageIndex * pagination.pageSize,
      },
      {
        accessorKey: "name",
        header: "Nama",
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
            <Button
              size="xs"
              className="!bg-blue-500 hover:!bg-blue-600 text-white"
              onClick={() => console.log("Edit:", row.original.id)}
            >
              Edit
            </Button>
            <Button
              size="xs"
              className="!bg-red-500 hover:!bg-red-600 text-white"
              onClick={() => console.log("Hapus:", row.original.id)}
            >
              Hapus
            </Button>
          </div>
        ),
      },
    ],
    [pagination.pageIndex, pagination.pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, pagination },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn,
  });

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2 md:gap-0">
        <div className="flex justify-between md:justify-start items-center w-full md:w-auto">
          <Button
            size="sm"
            variant="primary"
            onClick={() => router.push("/backend/users/create")}
          >
            + Tambah User
          </Button>
        </div>

        <div className="w-full md:w-1/3 md:ml-auto mt-2 md:mt-0">
          <Input
            type="text"
            placeholder="Search in all columns..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-sm border px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table>
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

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-4 py-3 text-theme-sm"
                  >
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
