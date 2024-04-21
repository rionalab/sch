export interface StudentRegistrationChildren {
  regisDate: string;
  unit: string;
  status: string;
  fullName: string;
  placeOfBirth: string;
  gender: string;
  religion: string;
  nationality: string;
  dob: string;
  birthOrder: string;
  totalChild: string;
  languages: string;
  photo: string;
  houseAddress: string;
  city: string;
  distance: string;
  goingToShoolBy: string;
}

export interface StudentRegistrationParent {
  fullName_father: string;
  idType_father: string;
  idNumber_father: string;
  nationality_father: string;
  religion_father: string;
  placeOfBirth_father: string;
  dob_father: string;
  lastEducation_father: string;
  universityName_father: string;
  address_father: string;
  city_father: string;
  postalCode_father: string;
  phoneNumber_father: string;
  email_father: string;
  occupationPosition_father: string;
  nameInstitution_father: string;
  officeAddress_father: string;
  relationWithChild_father: string;
  maritalStatus_father: string;
  theChildLivesWith_father: string;

  fullName_mother: string;
  idType_mother: string;
  idNumber_mother: string;
  nationality_mother: string;
  religion_mother: string;
  placeOfBirth_mother: string;
  dob_mother: string;
  lastEducation_mother: string;
  universityName_mother: string;
  address_mother: string;
  city_mother: string;
  postalCode_mother: string;
  phoneNumber_mother: string;
  email_mother: string;
  occupationPosition_mother: string;
  nameInstitution_mother: string;
  officeAddress_mother: string;
  relationWithChild_mother: string;
  maritalStatus_mother: string;
  theChildLivesWith_mother: string;
}

export interface StudentRegistrationActivities {
  arts: string;
  music: string;
  cognitive: string;
  sport: string;
  organization: string;
  others: string;
  preschoolName: string;
  preschoolyear: string;
  preschoolAddress: string;
  primaryName: string;
  primaryyear: string;
  primaryAddress: string;
  othersName: string;
  othersyear: string;
  othersAddress: string;
}

export interface StudentRegistrationInformation {
  typeActivities1: "string";
  locationActivities1: "string";
  timeActivities1: "string";
  startEndActivities1: "string";
  typeActivities2: "string";
  locationActivities2: "string";
  timeActivities2: "string";
  startEndActivities2: "string";
  typeActivities3: "string";
  locationActivities3: "string";
  timeActivities3: "string";
  startEndActivities3: "string";
  personLiveWithName1: "string";
  personLiveWithRelation1: "string";
  personLiveWithAddress1: "string";
  personLiveWithPhone1: "string";
  personLiveWithEmail1: "string";
  personLiveWithName2: "string";
  personLiveWithRelation2: "string";
  personLiveWithAddress2: "string";
  personLiveWithPhone2: "string";
  personLiveWithEmail2: "string";
  personLiveWithName3: "string";
  personLiveWithRelation3: "string";
  personLiveWithAddress3: "string";
  personLiveWithPhone3: "string";
  personLiveWithEmail3: "string";
  schoolInformation: "string";
  declaration: "string";
}

export interface StudentRegistration {
  id?: number;

  data: StudentRegistrationChildren;
  StudentRegistrationParent: { data: StudentRegistrationParent };
  StudentRegistrationActivities: StudentRegistrationActivities;
  StudentRegistrationInformation: StudentRegistrationInformation;

  createdAt?: Date;
  updatedAt?: Date;
}

// export interface FormFields extends Employee {}

export interface StoreEmployee {
  // extends Omit<
  //   Employee,
  //   "hireDate" | "dob" | "TMT" | "PKWT" | "PKWTEnd" | "PKWTStart"
  // > {
  // PKWTStart?: string;
  // PKWTEnd?: string;
  // hireDate: string;
  // TMT: string;
  // dob: string;
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
