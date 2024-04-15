"use server";

import { writeFile } from "fs/promises";
import { extname, join } from "path";

export async function uploadRicky(data: FormData) {
  try {
    const file = data.get("gambar") as unknown as File;
    const b = await file.arrayBuffer();
    const buffer = Buffer.from(b);
    const timestamp = Date.now();
    const fileExtension = extname(file.name);
    const filename = `${timestamp}${fileExtension}`;
    const path = join(process.cwd(), "public", "upload", "images", filename);

    await writeFile(path, buffer);
    return { success: true };
  } catch (e: any) {}
}
