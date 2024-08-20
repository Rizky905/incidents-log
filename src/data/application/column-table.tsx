"use client";

import { Button } from "@/components/ui/button";
import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Application } from "@/types/data";

const columnHelper = createColumnHelper<Application>();
const Columns = [
  columnHelper.accessor("name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apps
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (info) => info.getValue(),
    enableSorting: true,
    enableColumnFilter: true,
  }),

  columnHelper.accessor("pic", {
    header: () => "PIC",
    cell: (info) => info.getValue(),
    enableSorting: true,
    enableColumnFilter: true,
  }),
];
export default Columns;
