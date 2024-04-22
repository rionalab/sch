import { uploadFile } from "@/actions/file";
import type { UploadFile } from "antd";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export function getImage(fileName: string) {
  return `${baseUrl}/api/file/images/${fileName}`;
}

export async function uploadFileClient(file: UploadFile[]) {
  if (!file.length) {
    return "";
  }

  const data = new FormData();
  data.append("file", file[0] as unknown as File);
  return (await uploadFile({ data, dir: "images" }))?.fileName ?? "";
}
