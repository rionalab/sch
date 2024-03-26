import { today } from "@/libs/helpers";
import prisma from "@/libs/prisma";

export async function GET(request: Request) {
  const data = {
    code: "KR/PR/2024/01/00001",
    payment: "cash",
    purchaseDate: today().format(),
    deliveryDate: today().format(),
    remarks: "123",
    status: "pending",
    requesterId: 6,
    approverId: 6,
    active: true,
    vendorId: 1,
  };

  await prisma?.purchaseRequest.createMany({
    data: [data],
  });

  return Response.json({ password: "123" });
}
