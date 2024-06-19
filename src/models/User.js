import { z } from "zod";

export default function User(user) {
  const schema = z.object({
    username: z
      .string()
      .max(64)
      .regex(/^[a-z0-9-]+$/, {
        message: "Can only contain lowercase characters, numbers and -",
      })
      .trim()
      .toLowerCase(),
    bio: z.string().max(1024),
    website: z.string().url().optional().or(z.literal("")),
    tags: z.string().max(1024).optional(),
  });

  const validatedFields = schema.safeParse({
    username: user.username,
    bio: user.bio,
    website: user.website,
  });

  return {
    success: validatedFields.success,
    errors: validatedFields.error?.flatten().fieldErrors,
  };
}
