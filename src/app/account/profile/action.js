"use server";

import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";

const prisma = new PrismaClient();

export async function profileUpdate(prevState, formData) {
  const bio = formData.get("bio");
  const website = formData.get("website");

  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Not authenticated");
  }

  const validate = User({ bio, website });
  console.log(validate);
  if (!validate.success) {
    return validate;
  }

  // save to db
  await prisma.user.update({
    where: { id: session.user.id },
    data: { bio, website },
  });

  return validate;
}
