"use server";

import { getServerSession } from "next-auth/next";

import prisma from "@/models/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";

export async function profileUpdate(prevState, formData) {
  const username = formData.get("username");
  const preferredEmail = formData.get("preferredEmail");
  const bio = formData.get("bio");
  const website = formData.get("website");
  const tags = formData.get("tags");

  // check authentication
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Not authenticated");
  }

  const validate = User({ bio, website, username, tags, preferredEmail });

  if (!validate.success) {
    return validate;
  }

  // check username doesn't already exist in db
  const user = await prisma.user.findUnique({
    where: { username },
  });

  // only throw an error if there is a set username
  // and a user is found that does not match the authenticated user
  if (username && user && user.id !== session.user.id) {
    return {
      success: false,
      errors: {
        username: [
          `The username "${username}" is not unique, please try again`,
        ],
      },
    };
  }

  // save to db
  await prisma.user.update({
    where: { id: session.user.id },
    data: { bio, website, username, tags, preferredEmail },
  });

  return validate;
}
