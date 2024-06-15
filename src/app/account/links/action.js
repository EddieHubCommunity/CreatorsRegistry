"use server";

import { getServerSession } from "next-auth/next";

import prisma from "@/models/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Platform from "@/models/Platform";

export async function platformUpdate(prevState, formData) {
  const name = formData.get("name");
  const reach = formData.get("reach");
  const price = Number(formData.get("price"));
  const url = formData.get("url");

  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Not authenticated");
  }

  const validate = Platform({ name, reach, price, url });

  if (!validate.success) {
    return validate;
  }

  // save to db
  await prisma.platform.create({
    data: {
      user: {
        connect: {
          id: session.user.id,
        },
      },
      name,
      reach,
      price,
      url,
    },
  });

  return validate;
}
