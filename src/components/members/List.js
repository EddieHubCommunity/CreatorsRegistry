import prisma from "@/models/db";
import Member from "./Member";

export default async function List() {
  const members = await prisma.user.findMany({
    where: {
      username: {
        not: null,
      },
    },
  });

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {members.map((item) => (
        <Member member={item} />
      ))}
    </ul>
  );
}
