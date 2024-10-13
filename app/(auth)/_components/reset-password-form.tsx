"use client";

import CardWrapper from "@/app/(auth)/_components/card-wrapper";
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
import { ResetPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ResetPasswordForm() {
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: { email: "" },
  });

  return (
    <CardWrapper
      title="Forget your password"
      desc="Reset password"
      changePageHref="/sign-in"
      changePageTitle="Back to sign in"
    >
      <Form {...form}>
        <form className="flex flex-col gap-2">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your email..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button type="submit" className="mt-2 w-full">
            Send
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
