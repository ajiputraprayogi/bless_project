import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js DataTable | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js DataTable page using TailAdmin + TanStack Table with Tailwind CSS Admin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="DataTable" />

      <div className="space-y-6">
        <ComponentCard title="DataTable with Search, Sort & Pagination">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
