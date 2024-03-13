const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export function imageUpload(fileName: string) {
  return `${baseUrl}/upload/images/${fileName}`;
}
