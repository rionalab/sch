export function sendResponse(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export async function wait(delay: number = 2000) {
  return new Promise((res) => setTimeout(res, delay));
}
