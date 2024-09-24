import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import DataTable from "@/components/custom/data-table";
import Columns from "@/data/application/column-table";
import { Application } from "@/types/data";

interface dataProps<Tdata> {
  api: () => Promise<Tdata[]>;
}

const QueryData = <Tdata,>({ api }: dataProps<Tdata>) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["application"],
    queryFn: api,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <>{data && <DataTable columns={Columns} data={data} />}</>;
};

export default QueryData;
