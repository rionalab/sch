import { Prisma } from "@prisma/client";
import { ContractStatus } from "@prisma/client";

export interface Employee {
  id: number;
  fullName: string;
  photo: string; // Assuming photo will be a URL or a base64 encoded image
  bloodType: string;
  unit: string;
  NIP: string; // National Identification Number
  NIK: string; // National Identity Card Number
  dob: Date; // Date of Birth
  maritalStatus: string;
  gender: string;
  religion: string;
  idAddress: string; // Identity card address
  houseAddress: string; // Home address
  email: string;
  phone1: string;
  tribe?: string;
  phone2?: string;
  familyPhone: string;
  degree: string;
  institution: string; // Institution where degree was obtained
  major: string;
  fatherName: string;
  placeOfBirth: string;
  motherName: string;
  siblingName: string; // Name of a sibling
  spouseName: string; // Name of spouse
  childrenName: string; // Name of child/children
  initialHiringDate: Date;
  TMT?: Date;
  PKWTStart?: Date;
  PKWTEnd?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  zipCode: string;
  remarks?: string;
  contractStatus: ContractStatus;
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
