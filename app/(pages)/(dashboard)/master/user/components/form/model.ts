import { type Prisma } from "@prisma/client";
import { type FormFields } from "../../type";
import bcrypt from "bcrypt";

export async function modelStore(
  formValue: FormFields
): Promise<Prisma.UserCreateInput> {
  return {
    email: formValue.email,
    roleAccess: formValue.roleAccess,
    active: formValue.active,
    ...(!formValue.id
      ? {
          password: await bcrypt.hash(formValue.password, 10),
          Profile: {
            create: {},
          },
        }
      : {}),
  };
}
