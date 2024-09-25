import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  app_name: z.string().min(2, {
    message: "Apps must be at least 2 characters.",
  }),
  app_pic: z.string().min(2, {
    message: "App PIC must be at least 2 characters.",
  }),
  app_module: z.string(),
});

function InputApplication() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      app_name: "",
      app_pic: "",
      app_module: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form className="grid gap-4 m-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="app_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Input apps name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="app_pic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application PIC</FormLabel>
                  <FormControl>
                    <Input placeholder="Input apps PIC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="app_module"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Module</FormLabel>
                  <FormControl>
                    <Input placeholder="Input apps Module" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-1 mt-4">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
}

export default InputApplication;
