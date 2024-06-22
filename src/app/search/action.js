"use server";

import { redirect } from "next/navigation";

export async function search(formData) {
  const sort = formData.get("sort");
  const sortDirection = formData.get("sortDirection");
  const platform = formData.get("platform");
  const reach = formData.get("reach");

  redirect(
    `/search?sort=${sort}&sortDirection=${sortDirection}&platform=${platform}&reach=${reach}`
  );
}
