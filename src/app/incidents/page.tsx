import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/custom/data-table";
import Data from "@/data/data/data";
import Columns from "@/data/data/column-table";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

function Datas() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Data</h1>
      </div>
      <div className="flex items-center justify-end space-x-1">
        <Button size="sm" variant="red_msig">
          <FaPlus className="mr-2" />
          <Link href="/incidents/create">Add Data</Link>
        </Button>
      </div>
      <DataTable columns={Columns} data={Data} />
    </main>
  );
}

export default Datas;
