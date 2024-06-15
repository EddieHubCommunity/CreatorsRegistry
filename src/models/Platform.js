import { z } from "zod";

import reach from "@/config/reach";
import platforms from "@/config/platforms";

export default function Platform(platform) {
  const schema = z.object({
    name: z.enum(platforms().enum),
    reach: z.enum(reach().enum),
    price: z.number().min(10),
    url: z.string().url(),
  });

  const validatedFields = schema.safeParse({
    name: platform.name,
    reach: platform.reach,
    price: platform.price,
    url: platform.url,
  });

  return {
    success: validatedFields.success,
    errors: validatedFields.error?.flatten().fieldErrors,
  };
}
