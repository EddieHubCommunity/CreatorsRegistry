import { z } from "zod";

import reach from "@/config/reach";
import platforms from "@/config/platforms";

export default function Platform(platform) {
  const schema = z.object({
    name: z.enum(platforms().enum),
    reach: z.enum(reach().enum),
    price: z.number().min(10),
    url: z.string().url(),
    example: z.string().url(),
    description: z.string().max(1024),
  });

  const validatedFields = schema.safeParse({
    name: platform.name,
    reach: platform.reach,
    price: platform.price,
    url: platform.url,
    example: platform.example,
    description: platform.description,
  });

  return {
    success: validatedFields.success,
    errors: validatedFields.error?.flatten().fieldErrors,
  };
}
