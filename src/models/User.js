import { z } from "zod";

export default function User(user) {
  const schema = z.object({
    bio: z.string().max(1024),
    website: z.string().url().optional().or(z.literal("")),
  });

  const validatedFields = schema.safeParse({
    bio: user.bio,
    website: user.website,
  });

  return {
    success: validatedFields.success,
    errors: validatedFields.error?.flatten().fieldErrors,
  };
}
