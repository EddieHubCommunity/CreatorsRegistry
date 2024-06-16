"use server";

import { getServerSession } from "next-auth/next";

import prisma from "@/models/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Platform from "@/models/Platform";
import { revalidatePath } from "next/cache";

export async function platformUpdate(id, prevState, formData) {
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
  if (id) {
    await prisma.platform.update({
      where: {
        id,
        userId: session.user.id,
      },
      data: {
        name,
        reach,
        price,
        url,
      },
    });
  } else {
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
  }

  revalidatePath("/account/links");
  return validate;
}
