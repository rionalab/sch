import { getServerSession } from "next-auth";
import prisma from "@/libs/prisma";

export async function GET(request: Request) {
  let result = null;

  const session = await getServerSession();
  const user = await prisma?.user.findMany({
    where: {
      email: session?.user?.email ?? "",
    },
    include: {
      role: true,
      department: true,
    },
  });

  if (user?.length) {
    result = user[0];
  }

  return Response.json({ ...result, password: "" });
}
