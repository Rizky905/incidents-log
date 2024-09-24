"use client";

import React from "react";

import {
  useQuery,
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import url from "@/config/url";

import { Button } from "@/components/ui/button";
import DataTable from "@/components/custom/data-table";
import Data from "@/data/data/data";
import Columns from "@/data/application/column-table";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
// import { get_application } from "@/services/master-data/get_application";
import { getApplicationApi } from "@/services/master-data/getApplicationApi";
import { array } from "zod";

const queryClient = new QueryClient();
export default function Application() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Data</h1>
      </div>
      <div className="flex items-center justify-end space-x-1">
        <Button size="sm" variant="red_msig">
          <FaPlus className="mr-2" />
          <Link href="/datas/create">Add Data</Link>
        </Button>
      </div>

      {/* <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider> */}

      <Example />
    </main>
  );
}

function Example() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["application"],
    queryFn: getApplicationApi,
  });

  if (isLoading) {
    return <p>Data is loading...</p>;
  }
  if (error) {
    return <p>There was an error when fetching your data.</p>;
  }

  return (
    // <ul>
    //   {data?.map((application) => {
    //     return <li>{application.name}</li>;
    //   })}
    // </ul>
    <>{data && <DataTable columns={Columns} data={data} />}</>
  );
}
