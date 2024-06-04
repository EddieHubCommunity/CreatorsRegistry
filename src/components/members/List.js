import { PrismaClient } from "@prisma/client";

import Member from "./Member";

const prisma = new PrismaClient();

export default async function List() {
  const members = await prisma.user.findMany();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {members.map((item) => (
        <Member member={item} />
      ))}
    </ul>
  );
}
