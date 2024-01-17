"use server";

import { wait } from "@/libs/helpers";
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

  // Step 2: Insert Course and associate it with the placeholder Teacher
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

export async function index() {
  await wait(5000);
  return await prisma.employee.findMany({
    include: {
      user: true,
      position: true,
    },
  });
}
