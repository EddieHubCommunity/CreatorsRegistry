"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/models/db";
import Platform from "@/models/Platform";

export async function platformUpdate(prevState, formData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const reach = formData.get("reach");
  const price = Number(formData.get("price"));
  const url = formData.get("url");
  const example = formData.get("example");
  const title = formData.get("title");
  const description = formData.get("description");

  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Not authenticated");
  }

  const validate = Platform({
    name,
    reach,
    price,
    url,
    description,
    example,
    title,
  });

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
        description,
        example,
        title,
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
        description,
        example,
        title,
      },
    });
  }

  revalidatePath("/account/platforms");
  return validate;
}

export async function platformDelete(formData) {
  const id = formData.get("id");

  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Not authenticated");
  }

  if (!id) {
    return { success: false };
  }

  // delete from db
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      platforms: {
        delete: { id },
      },
    },
    include: {
      platforms: true,
    },
  });

  revalidatePath("/account/platforms");
  redirect("/account/platforms");
}
