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
import { useForm } from "react-hook-form";

export default function ResetPasswordForm() {
  const form = useForm();

  return (
    <CardWrapper
      title="Reset password"
      desc="Forget your password"
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
