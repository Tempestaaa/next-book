"use client";

import CardWrapper from "@/app/(auth)/_components/card-wrapper";
import ChangePage from "@/app/(auth)/_components/change-page";
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

export default function SignInForm() {
  const form = useForm();

  return (
    <CardWrapper
      title="Welcome back!"
      desc="Sign in to your account"
      changePageHref="/sign-up"
      changePageTitle="Don't have an account?"
      showSocials
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

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="******" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ChangePage
            changePageHref="/reset-password"
            changePageTitle="Forget your password"
          />

          {/* Submit button */}
          <Button type="submit" className="mt-2 w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
