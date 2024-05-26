import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface InputProps {
  form: any;
  name: string;
  className?: string;
  label: string;
  placeholder: string;
}

const FormInput: FC<InputProps> = ({
  form,
  name = "field",
  className = "text-base font-semibold",
  label = "label",
  placeholder = "Enter here",
}: InputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={className}>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
