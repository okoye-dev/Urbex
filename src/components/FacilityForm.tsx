import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  nameOfFacility: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
  typeOfFacility: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  dateCreated: z.string().min(2).max(50),
});

export function FacilityForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOfFacility: "",
      typeOfFacility: "",
      location: "",
      dateCreated: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nameOfFacility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of facility</FormLabel>
              <FormControl>
                <Input placeholder="Type of facility" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typeOfFacility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of facility</FormLabel>
              <FormControl>
                <Input placeholder="Not exactly what for orecin g" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Location</FormLabel>
              <FormControl>
                <Input placeholder="Where do you stay?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typeOfFacility"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">
                Which date was facility created?
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=" What date was effectively chosen from models."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Submit</Button>
      </form>
    </Form>
  );
}
