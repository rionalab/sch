export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  religion: string;
  photo: string;
  bloodType: string;
  email: string;
  phone1: string;
  phone2: string;
  familyPhone: string;
  address: string;
  zipCode: string;
  tribe: string;
  positionId: number;
  remarks: string;
  gender: string;
  hireDate: Date;
  dob: Date;
  placeOfBirth: string;
  createdAt: Date;
  updatedAt: Date;
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
