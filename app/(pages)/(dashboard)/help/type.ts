import type { Role } from "@prisma/client";

export interface FormFields {
  id?: string;
  actions: string;
  name: Role;
  label: string;
}
