import { z } from "zod";

export default function User(user) {
  const schema = z.object({
    username: z.string().max(64),
    bio: z.string().max(1024),
    website: z.string().url().optional().or(z.literal("")),
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
