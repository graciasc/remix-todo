import * as FormPrimitive from "@radix-ui/react-form";
// import Slot from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import React from "react";

const inputVariants = cva("ring-1 focus:ring-1", {
  variants: {
    variant: {
      primary: "bring-blue-500 ring-blue-500 focus:ring-blue-500 focus:ring-1",
      default: "ring-rose-500 focus:ring-rose-500 focus:ring-1",
    },
  },
});

// explore types, generics and variants (components types that use html elements )
// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof inputVariants> {
//   asChild?: boolean;
// }

// types with radix ui primitive components
const Input = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Root> &
    VariantProps<typeof inputVariants> & { asChild?: boolean }
>(({ className, variant = "default", ...props }, ref) => {
  // why do we need as child here?
  // const Comp = asChild ? Slot : FormPrimitive;
  return (
    <FormPrimitive.Root
      className={clsx(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    ></FormPrimitive.Root>
  );
});

Input.displayName = "Input";
export { Input };
