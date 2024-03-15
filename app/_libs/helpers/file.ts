const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export function getImage(fileName: string) {
  return `${baseUrl}/api/file/images/${fileName}`;
}
