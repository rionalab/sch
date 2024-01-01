import prisma from "@/app/_libs/prisma";

export async function GET() {
  try {
    const data = await prisma.post.findMany();
    return Response.json(data);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}

export async function POST() {
  return Response.json({ message: "POST: /api/posts" });
}
