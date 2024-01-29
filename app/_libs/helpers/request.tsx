export function sendResponse(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export async function wait(delay: number = 2000) {
  return await new Promise((resolve) => setTimeout(resolve, delay));
}
