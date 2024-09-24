"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import Columns from "@/data/application/column-table";
// import { useApplicationQuery } from "@/hooks/application";
import DataTable from "@/components/custom/data-table";
import QueryProvider from "@/components/custom/query-provider";

import { getApplicationApi } from "@/services/master-data/getApplicationApi";
import QueryData from "@/components/custom/query-data";
import InputApplication from "@/components/custom/input/input-application";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const queryClient = new QueryClient();

function Application() {
  // const applicationQuery = useApplicationQuery();

  // if (applicationQuery.isError) {
  //   return <p>{applicationQuery.error.message}</p>;
  // }
  // if (applicationQuery.isLoading) {
  //   return <p>LOADING....</p>;
  // }
  // if (applicationQuery.isFetching) {
  //   return <p>FETCHING....</p>;
  // }

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["application"],
  //   queryFn: getApplicationApi,
  // });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

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

      <QueryClientProvider client={queryClient}>
        {/* {data && <DataTable columns={Columns} data={data} />} */}

        {getApplicationApi && <QueryData api={getApplicationApi} />}
      </QueryClientProvider>
    </main>
  );
}

// function FormInput() {
//   return (
//     <form action="" className="grid gap-4 m-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="grid gap-2">
//           <Label htmlFor="app-name">Application name</Label>
//           <Input
//             id="app-name"
//             placeholder="Application"
//             name="app_name"
//             required
//           />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="app-pic">Application PIC</Label>
//           <Input id="app-pic" placeholder="PIC" name="app_pic" required />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="grid gap-2">
//           <Label htmlFor="app-module">Application Module</Label>
//           <Input
//             id="app-module"
//             placeholder="Robinson"
//             name="app_module"
//             required
//           />
//         </div>
//       </div>
//       <div className="flex items-center justify-end space-x-1 mt-4">
//         <DrawerClose asChild>
//           <Button variant="outline">Cancel</Button>
//         </DrawerClose>
//         <Button type="submit">Save</Button>
//       </div>
//     </form>
//   );
// }

export default Application;
