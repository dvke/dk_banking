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
import { Textarea } from "./ui/textarea";

const formSchema = authFormSchema("sign-up");

interface CustomTransferFormTextareaProps {
  control: Control<z.infer<typeof transferFormSchema>>;
  name: FieldPath<z.infer<typeof transferFormSchema>>;
  label: string;
  placeholder: string;
  description: string;
}

const CustomTransferFormTextarea = ({
  control,
  name,
  label,
  placeholder,
  description,
}: CustomTransferFormTextareaProps) => {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem className="border-t border-gray-200">
          <div className="payment-transfer_form-item pb-6 pt-5">
            <div className="payment-transfer_form-content">
              <FormLabel className="text-14 font-medium text-gray-700">
                {label}
              </FormLabel>
              <FormDescription className="text-12 font-normal text-gray-600">
                {description}
              </FormDescription>
            </div>
            <div className="flex w-full flex-col">
              <FormControl>
                <Textarea
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

export default CustomTransferFormTextarea;
