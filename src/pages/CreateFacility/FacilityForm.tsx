import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "./FormInput";

const formSchema = z.object({
  nameOfFacility: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  typeOfFacility: z
    .string()
    .min(2, { message: "Type must be at least 2 characters." })
    .max(50),
  location: z.string().min(2, { message: "This field is required" }).max(50),
  dateCreated: z.string().min(2, { message: "This field is required" }).max(50),
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
        <FormInput
          form={form}
          name="nameOfFacility"
          label="Name of facility"
          placeholder="Name of facility"
        />
        <FormInput
          form={form}
          name="typeOfFacility"
          label="Type of facility"
          placeholder="Type of facility"
        />
        <FormInput
          form={form}
          name="location"
          label="Location"
          placeholder="Where do you stay?"
        />
        <FormInput
          form={form}
          name="dateCreated"
          label="Which date was the facility created?"
          placeholder="What date was effectively chosen from the models?"
        />
        <Button className="translate-y-2 w-40 text-sm py-[18px] bg-blue rounded-lg">
          Submit
        </Button>
      </form>
    </Form>
  );
}
