export async function GET() {
  return Response.json({ message: "GET: Comments" });
}

export async function POST() {
  return Response.json({ message: "POST: comments" });
}
