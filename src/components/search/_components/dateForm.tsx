"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import Location from "./location";
import Image from "next/image";
import { useContext } from "react";
import { SearchContext } from "@/context/searchContext";

const FormSchema = z.object({
  pick_up: z.date({
    required_error: "Pick-up date is required",
  }),
  drop_off: z.date({
    required_error: "Pick-up date is required",
  }),
});

export function DatePickerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { activeSearch } = useContext(SearchContext);

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 xl:space-y-0 flex xl:flex-row flex-col xl:justify-center xl:items-center gap-2 xl:space-x-20"
      >
        {" "}
        <FormField
          control={form.control}
          name="pick_up"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Pick-up date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <hr className="xl:border-r-2 border-slate-600 w-[1px] xl:h-[80px] opacity-10"></hr>
        <FormField
          control={form.control}
          name="drop_off"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Drop-off date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <hr className="xl:border-r-2 border-slate-600 w-[1px] xl:h-[80px] opacity-10"></hr>
        <div className="ml-6 relative">
          <Location activeSearch={activeSearch} />
        </div>
        <hr className="xl:border-r-2 border-slate-600 w-[1px] xl:h-[80px] opacity-10"></hr>
        <Button type="submit" className="min-w-[150px]">
          Search
        </Button>
      </form>
    </Form>
  );
}
