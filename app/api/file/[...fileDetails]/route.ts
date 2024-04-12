import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { fileDetails: string[] } },
) {
  try {
    const [dir, image] = params.fileDetails;
    const imagePath = path.join(process.cwd(), "public", "upload", dir, image);
    const ext = path.extname(imagePath);

    if (!fs.existsSync(imagePath)) {
      return new Response("File not found!", { status: 404 });
    }

    const imageBuffer = fs.readFileSync(imagePath);

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/" + ext.slice(1), // using slice to remove the dot (.)
      },
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response("", { status: 500 });
  }
}
