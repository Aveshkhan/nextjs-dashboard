import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";
import { TableRowSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
    title: 'Customers',
}

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const totalCustomers = await fetchFilteredCustomers(query)
    return (
        <>
        <Suspense key={query} fallback={<TableRowSkeleton/>}>
            <CustomersTable customers={totalCustomers} />
        </Suspense>
        </>
    )

}