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
import { SignUpSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SignUpForm() {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm: "",
    },
  });

  return (
    <CardWrapper
      title="Greeting!"
      desc="Create an account"
      changePageHref="/sign-in"
      changePageTitle="Already have an account?"
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

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your username..." />
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

          {/* Confirm password */}
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="******" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button type="submit" className="mt-2 w-full">
            Sign up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
