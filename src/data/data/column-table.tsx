"use client";

import { Button } from "@/components/ui/button";
import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

type IData = {
  id: number;
  apps: string;
  request_by: string;
  request_date: Date;
  main_pic: string;
  email_pic: string;
  level_error: "HIGH" | "LOW";
  status: "PROCESSING" | "DONE";
  done_by: string;
  done_date: Date;
  evidence: string;
};

const columnHelper = createColumnHelper<IData>();

const Columns = [
  columnHelper.accessor("apps", {
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

  columnHelper.accessor("request_by", {
    header: () => "Request By",
    cell: (info) => info.getValue(),
    enableSorting: true,
    enableColumnFilter: true,
  }),

  columnHelper.accessor("main_pic", {
    header: () => "Main PIC",
    cell: (info) => info.getValue(),
    enableSorting: true,
    enableColumnFilter: true,
  }),
];
export default Columns;
