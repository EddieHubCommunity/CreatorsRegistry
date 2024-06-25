import { z } from "zod";

import REACH from "@/config/reach";
import PLATFORMS from "@/config/platforms";

export default function Platform(platform) {
  const schema = z.object({
    name: z.enum(PLATFORMS().enum),
    reach: z.enum(REACH().enum),
    price: z.number().min(10),
    url: z.string().url(),
    example: z.string().url(),
    title: z.string().max(256),
    description: z.string().max(1024),
  });

  const validatedFields = schema.safeParse({
    name: platform.name,
    reach: platform.reach,
    price: platform.price,
    url: platform.url,
    example: platform.example,
    title: platform.title,
    description: platform.description,
  });

  return {
    success: validatedFields.success,
    errors: validatedFields.error?.flatten().fieldErrors,
  };
}
