"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar as CalendarIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  apps: z.string().min(2, {
    message: "Apps must be at least 2 characters.",
  }),
  request_by: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  request_date: z.date(),
  level_error: z.string(),
  description: z.string().optional(),
});

function Create() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      apps: "",
      request_by: "",
      level_error: "",
      description: "",
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
    <div className="container mx-auto py-5 p-5">
      <Card>
        <CardHeader>
          <CardTitle>Add Data</CardTitle>
          <CardDescription>Add the data in here</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <div className="flex flex-row w-full items-center gap-4">
                <div className="basis-1/3">
                  <FormField
                    control={form.control}
                    name="apps"
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

                <div className="basis-1/3">
                  <FormField
                    control={form.control}
                    name="request_by"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Requester Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Input requester name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3">
                  <FormField
                    control={form.control}
                    name="request_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Request Date</FormLabel>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[280px] justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-row w-full items-center gap-4 mt-3">
                <div className="basis-1/3">
                  <FormField
                    control={form.control}
                    name="level_error"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Level Error</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select level error" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="HIGH">HIGH</SelectItem>
                            <SelectItem value="LOW">LOW</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Input description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-row w-full items-center gap-4 mt-3">
                <div className="basis-1/3">
                  <FormField
                    control={form.control}
                    name="apps"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Application Name</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="Input apps name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" variant="red_msig">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>

    // <div className="container mx-auto py-5 p-5">
    //   <Form {...form}>
    //     <form
    //       onSubmit={form.handleSubmit(onSubmit)}
    //       //   className="w-2/3 space-y-6"
    //     >
    //       <div className="flex gap-2">
    //         <div className="flex-none w-64">
    //           <FormField
    //             control={form.control}
    //             name="apps"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Application Name</FormLabel>
    //                 <FormControl>
    //                   <Input placeholder="Input apps name" {...field} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //         <div className="flex-none w-64">
    //           <FormField
    //             control={form.control}
    //             name="request_by"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Requester Name</FormLabel>
    //                 <FormControl>
    //                   <Input placeholder="Input requester name" {...field} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //         <div className="flex-none w-64">
    //           <FormField
    //             control={form.control}
    //             name="request_by"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Requester Name</FormLabel>
    //                 <FormControl>
    //                   <Input placeholder="Input requester name" {...field} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //       </div>
    //       <div className="flex gap-2 mt-3">
    //         <div className="flex-none w-64">
    //           <FormField
    //             control={form.control}
    //             name="apps"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Application Name</FormLabel>
    //                 <FormControl>
    //                   <Input placeholder="Input apps name" {...field} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //         <div className="flex-none w-64">
    //           <FormField
    //             control={form.control}
    //             name="request_by"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Requester Name</FormLabel>
    //                 <FormControl>
    //                   <Input placeholder="Input requester name" {...field} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //         <div className="flex-none w-64">
    //           <FormField
    //             control={form.control}
    //             name="request_by"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Requester Name</FormLabel>
    //                 <FormControl>
    //                   <Input placeholder="Input requester name" {...field} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex justify-end mt-5 mr-5">
    //         <Button type="submit" variant="red_msig">
    //           Submit
    //         </Button>
    //       </div>
    //     </form>
    //   </Form>
    // </div>
  );
}

export default Create;
