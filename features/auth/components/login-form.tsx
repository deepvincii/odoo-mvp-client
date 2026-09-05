"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ApiError } from "@/lib/api-client";
import { siteConfig } from "@/lib/site-config";

import { loginSchema, type LoginValues } from "../auth-schema";
import { login } from "../auth-service";

export function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [recoveryMessage, setRecoveryMessage] = useState<string | null>(null);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: LoginValues) => {
    setPending(true);
    setRecoveryMessage(null);
    form.clearErrors("root");

    try {
      await login({
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
      });

      router.replace(siteConfig.authenticatedHome);
      router.refresh();
    } catch (error) {
      const message =
        error instanceof ApiError || error instanceof Error
          ? error.message
          : "Unable to sign in. Please try again.";

      form.setError("root", { message });
    } finally {
      setPending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-2">
                <FormLabel>Password</FormLabel>
                <button
                  type="button"
                  className="text-primary text-xs underline-offset-4 hover:underline"
                  onClick={() =>
                    setRecoveryMessage(
                      "Password recovery will be connected when account management is added.",
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal">
                Remember me for 30 days
              </FormLabel>
            </FormItem>
          )}
        />

        {recoveryMessage ? (
          <p className="text-muted-foreground text-xs" role="status">
            {recoveryMessage}
          </p>
        ) : null}

        {form.formState.errors.root?.message ? (
          <p className="text-destructive text-sm" role="alert">
            {form.formState.errors.root.message}
          </p>
        ) : null}

        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="mt-2 w-full"
        >
          {pending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
}
