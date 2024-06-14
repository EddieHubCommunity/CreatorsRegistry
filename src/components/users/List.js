import prisma from "@/models/db";
import User from "./User";

export default async function List() {
  const users = await prisma.user.findMany();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((item) => (
        <User user={item} />
      ))}
    </ul>
  );
}
