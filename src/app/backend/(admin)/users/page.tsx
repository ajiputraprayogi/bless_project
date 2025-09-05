"use client";

import React, { useMemo, useState, useEffect } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
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
} from "@tanstack/react-table";
import { supabase } from "@/lib/supabaseClient"; // ✅ pakai supabaseClient.js

// ----- Interface -----
interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [data, setData] = useState<User[]>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // ----- Ambil data dari Supabase -----
  useEffect(() => {
    const fetchUsers = async () => {
      const { data: users, error } = await supabase
        .from("users")
        .select("id, name, email");
      if (error) {
        console.error("Error fetch users:", error);
      } else {
        setData(users || []);
      }
    };
    fetchUsers();
  }, []);

  // ----- Definisi kolom -----
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: "no",
        header: "No",
        cell: ({ row }) => row.index + 1, // nomor urut otomatis
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
      { accessorKey: "email", header: "Email" },
    ],
    []
  );

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
  });

  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />

      <div className="space-y-6">
        <ComponentCard title="Users DataTable (Supabase)">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="mb-3 w-60 rounded-md border px-3 py-2 text-sm"
          />

          {/* Table */}
          <div className="max-w-full overflow-x-auto">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((hg) => (
                  <TableRow key={hg.id}>
                    {hg.headers.map((header) => (
                      <TableCell key={header.id} isHeader>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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
        </ComponentCard>
      </div>
    </div>
  );
}
