import { type Dayjs } from "dayjs";

export interface Employee {
  id?: number;
  NIP: string;
  positionId: number;
  hireDate: Dayjs;
  contractStatus: string;
  unit: string | null;
  TMT: Dayjs;
  PKWTStart: Dayjs;
  PKWTEnd?: Dayjs;
  PKWT?: [Dayjs, Dayjs];
  fullName: string;
  NIK: string;
  placeOfBirth: string;
  dob: Dayjs;
  gender: string;
  bloodType: string | null;
  religion: string;
  tribe: string | null;
  idAddress: string;
  houseAddress: string;
  maritalStatus: string;
  photo: string;

  email: string;
  phone1: string;
  phone2?: string | null;
  familyPhone: string;

  degree: string;
  institution: string;
  major: string;

  fatherName: string;
  motherName: string;
  siblingName: string | null;
  spouseName: string | null;
  childrenName: string | null;

  remarks?: string | null;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface FormFields extends Employee {}

export interface StoreEmployee
  extends Omit<
    Employee,
    "hireDate" | "dob" | "TMT" | "PKWT" | "PKWTEnd" | "PKWTStart"
  > {
  PKWTStart?: string;
  PKWTEnd?: string;
  hireDate: string;
  TMT: string;
  dob: string;
}

export interface StoreEmployeeByCreate
  extends Omit<StoreEmployee, "id" | "positionId" | "userId"> {
  id: undefined;
  positionId: undefined;
  userId: undefined;
}

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
