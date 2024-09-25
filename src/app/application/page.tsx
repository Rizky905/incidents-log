"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { Columns } from "@/data/application/column-table";
// import DataTable from "@/components/custom/data-table";
import { DataTable } from "@/components/custom/data-table";

import { useApplication } from "@/services/application/getApplicationApi";
import InputApplication from "@/components/custom/input/input-application";
import Pagination from "@/components/custom/pagination";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Application() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, isLoading, isError } = useApplication({
    page: Number(searchParams?.get("page") || 1),
    limit: Number(searchParams?.get("limit") || 10),
  });

  if (isError) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1>Error</h1>
      </div>
    );
  }

  const onNext = () => {
    const page = Number(searchParams?.get("page") || 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", `${page + 1}`);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onPrevious = () => {
    const page = Number(searchParams?.get("page") || 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", `${page - 1}`);
    console.log(params);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Data</h1>
      </div>

      <div className="flex items-center justify-end space-x-1">
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="sm" variant="red_msig">
              <FaPlus className="mr-2" />
              Add Data
            </Button>
          </DrawerTrigger>
          <DrawerContent style={{ maxWidth: "100%", minHeight: "90%" }}>
            <DrawerHeader>
              <DrawerTitle>Add Data</DrawerTitle>
              <DrawerDescription>
                Add your application here. Click save when you're done
              </DrawerDescription>
            </DrawerHeader>
            <InputApplication />
          </DrawerContent>
        </Drawer>
      </div>

      <DataTable
        columns={Columns}
        data={data?.data || []}
        isLoading={isLoading}
      />
      <Pagination
        page={Number(searchParams?.get("page") || 1)}
        limit={Number(searchParams?.get("limit") || 10)}
        count={data?.total || 0}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </main>
  );
}
