"use server";

import prisma from "@/libs/prisma";

export async function initData() {
  const teacher = await prisma.teacher.create({
    data: {
      firstName: "Placeholder",
      lastName: "Teacher",
      email: "placeholder2@example.com",
    },
  });

  console.log("Placeholder Teacher created:", teacher);

  const course = await prisma.course.create({
    data: {
      title: "Placeholder Course",
      description: "Placeholder Description",
      teacher: {
        connect: { id: teacher.id },
      },
    },
  });
  console.log(
    "Placeholder Course created and associated with Teacher:",
    course
  );
}

export async function getEmployee() {
  return await prisma.employee.findMany({
    include: {
      user: true,
      position: true,
    },
  });
}
