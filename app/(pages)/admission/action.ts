"use server";

export async function checkHasRegisterParent(userId: number) {
  try {
    const result = await prisma?.userAdmission.findFirst({
      where: {
        id: userId,
      },
      include: {
        parentData: true,
      },
    });

    return result?.parentData;
  } catch (e) {
    console.log(e);
  }
}
