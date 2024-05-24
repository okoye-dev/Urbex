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
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 font-semibold"
      >
        <FormField
          control={form.control}
          name="nameOfFacility"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Name of facility
              </FormLabel>
              <FormControl>
                <Input placeholder="Name of facility" {...field} />
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
              <FormLabel className="text-base font-semibold">
                Type of facility
              </FormLabel>
              <FormControl>
                <Input placeholder="Type of facility" {...field} />
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
              <FormLabel className="text-base font-semibold">
                Location
              </FormLabel>
              <FormControl>
                <Input placeholder="Where do you stay?" {...field} /> 
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateCreated"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
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
        <Button className="translate-y-2 w-40 text-sm py-[18px] bg-blue rounded-lg">
          Submit
        </Button>
      </form>
    </Form>
  );
}
