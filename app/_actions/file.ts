"use server";

import { writeFile } from "fs/promises";
import { extname, join } from "path";

interface UploadFile {
  data: FormData;
  dir: "images" | "docs";
}

export async function uploadFile({ data, dir }: UploadFile) {
  try {
    const file = data.get("file") as unknown as File;
    const b = await file.arrayBuffer();
    const buffer = Buffer.from(b);

    const timestamp = Date.now();
    const fileExtension = extname(file.name);
    const fileName = `${timestamp}${fileExtension}`;

    const path = join(process.cwd(), "public", "upload", dir, fileName);
    await writeFile(path, buffer);

    return { success: true, fileName };
  } catch (e: any) {
    return { success: false };
  }
}
