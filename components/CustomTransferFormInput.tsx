import React from "react";
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
  FormDescription,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema, transferFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomTransferFormInputProps {
  control: Control<z.infer<typeof transferFormSchema>>;
  name: FieldPath<z.infer<typeof transferFormSchema>>;
  label: string;
  placeholder: string;
}

const CustomTransferFormInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomTransferFormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="border-t border-gray-200">
          <div className="payment-transfer_form-item py-5">
            <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-12 text-red-500" />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomTransferFormInput;
