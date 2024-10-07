import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters" }),
  email: z.string().email({ message: "Email invalid" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  image: z.optional(z.string()),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const SignInSchema = UserSchema.pick({
  email: true,
  password: true,
});

export const SignUpSchema = UserSchema.pick({
  email: true,
  username: true,
  password: true,
})
  .extend({
    confirm: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });
