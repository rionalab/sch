import { Prisma } from "@prisma/client";
import { ContractStatus } from "@prisma/client";

export interface Employee {
  id: number;
  NIP: string;
  positionId: number;
  hireDate: Date;
  contractStatus: ContractStatus;
  unit: string;
  TMT?: Date;
  PKWTStart?: Date;
  PKWTEnd?: Date;

  fullName: string;
  NIK: string;
  placeOfBirth: string;
  dob: Date;
  gender: string;
  bloodType?: string;
  religion: string;
  tribe?: string;
  idAddress: string;
  houseAddress: string;
  maritalStatus: string;
  photo: string;

  email: string;
  phone1: string;
  phone2?: string;
  familyPhone: string;

  degree: string;
  institution: string;
  major: string;

  fatherName: string;
  motherName: string;
  siblingName: string; // Name of a sibling
  spouseName: string; // Name of spouse
  childrenName: string; // Name of child/children

  remarks?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export type FieldType = Employee;

export interface FieldType2 {
  firstName?: string;
  lastName?: string;
  religion?: string;
  photo?: string;
  bloodType?: string;
  email?: string;
  phone1?: string;
  phone2?: string;
  familyPhone?: string;
  address?: string;
  zipCode?: string;
}
