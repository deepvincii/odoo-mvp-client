"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useId,
  type ComponentProps,
  type ReactElement,
} from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);
const FormItemContext = createContext<{ id: string } | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>,
) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
);

function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext?.name as string });

  if (!fieldContext || !itemContext) {
    throw new Error("Form controls must be used within FormField and FormItem.");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    ...fieldState,
    formItemId: `${itemContext.id}-form-item`,
    formDescriptionId: `${itemContext.id}-form-item-description`,
    formMessageId: `${itemContext.id}-form-item-message`,
  };
}

function FormItem({ className, ...props }: ComponentProps<"div">) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: ComponentProps<typeof Label>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={Boolean(error)}
      htmlFor={formItemId}
      className={cn("data-[error=true]:text-destructive", className)}
      {...props}
    />
  );
}

function FormControl({ children }: { children: ReactElement }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return cloneElement(children as ReactElement<Record<string, unknown>>, {
    id: formItemId,
    "aria-describedby": error
      ? `${formDescriptionId} ${formMessageId}`
      : formDescriptionId,
    "aria-invalid": error ? true : undefined,
  });
}

function FormMessage({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const message = error ? String(error.message ?? "") : children;

  if (!message) return null;

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {message}
    </p>
  );
}

export {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
};
