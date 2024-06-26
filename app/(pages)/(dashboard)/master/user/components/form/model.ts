import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";
import bcrypt from "bcrypt";

export async function modelStore(
  formValue: FormFields,
): Promise<Prisma.UserCreateInput> {
  return {
    email: formValue.email,
    name: formValue.name,
    role: {
      connect: {
        id: Number(formValue.roleId),
      },
    },
    ...(formValue.departmentId
      ? {
          department: {
            connect: {
              id: Number(formValue.departmentId),
            },
          },
        }
      : {
          department: undefined,
          departmentId: null,
        }),

    active: formValue.active,
    ...(!formValue.id
      ? {
          password: await bcrypt.hash(formValue.userPassword, 10),
          Profile: {
            create: {},
          },
        }
      : {}),
  };
}
