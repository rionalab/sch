"use server";
import prisma from "@/libs/prisma";

export const submitAdmission = async (v: any, ticketId: number) => {
  await useAdmissionTicket(ticketId);

  const x = await prisma.studentRegistrationChildren.create({
    data: v,
  });
};

export const useAdmissionTicket = async (id: number) => {
  try {
    return await prisma.purchaseAdmission.update({
      where: {
        id,
      },
      data: {
        isUsed: true,
      },
    });
  } catch (e) {}
};
