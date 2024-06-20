import { type Dayjs } from "dayjs";

export type RegStatus = "new" | "transfer";

export interface ParentForm {
  id: number;
  parentId: number;
  documentId: number;
  code: string;
  price: number;
  isUsed: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Employee {
  status: RegStatus;
  nisn?: string;
  nationality: string;
  oldSchoolName?: string;
  oldSchoolAddress?: string;
  languages: string;
  distance: string;
  goingToShoolBy: string;

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
  oldPhoto?: string;
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

export interface FormOthers {
  schoolInformation: string;
  declaration: string;

  typeActivities1: string;
  locationActivities1: string;
  timeActivities1: string;
  startEndActivities1: string;

  typeActivities2: string;
  locationActivities2: string;
  timeActivities2: string;
  startEndActivities2: string;

  typeActivities3: string;
  locationActivities3: string;
  timeActivities3: string;
  startEndActivities3: string;

  personLiveWithName1: string;
  personLiveWithRelation1: string;
  personLiveWithAddress1: string;
  personLiveWithPhone1: string;
  personLiveWithEmail1: string;

  personLiveWithName2: string;
  personLiveWithRelation2: string;
  personLiveWithAddress2: string;
  personLiveWithPhone2: string;
  personLiveWithEmail2: string;

  personLiveWithName3: string;
  personLiveWithRelation3: string;
  personLiveWithAddress3: string;
  personLiveWithPhone3: string;
  personLiveWithEmail3: string;
}

export type ParentRelation =
  | "Biological"
  | "Step"
  | "Adoptive"
  | "Foster "
  | "Guardian";

export interface FormChild {
  id?: number;
  city: string;
  birthOrder: string;
  totalChild: string;
  photo?: string;
  familyCard?: string;
  birthCertificate?: string;
  immunizationCertificate?: string;

  typeActivities1: string;
  locationActivities1: string;
  timeActivities1: string;
  startEndActivities1: string;

  typeActivities2: string;
  locationActivities2: string;
  timeActivities2: string;
  startEndActivities2: string;

  typeActivities3: string;
  locationActivities3: string;
  timeActivities3: string;
  startEndActivities3: string;

  weight?: string;

  arts: string;
  music: string;
  cognitive: string;
  sport: string;
  organization: string;
  others: string;

  nonFormalEducation: any[] | [];

  previousSchoolName: string;
  previousSchoolType: string;
  previousSchoolYear: string;
  previousSchoolAddress: string;
  previousSchoolCity: string;
  previousSchoolRemarks: string;

  specialNeeds?: string;

  fatherRelationshipWithChild: ParentRelation;
  motherRelationshipWithChild: ParentRelation;

  idCardMother?: string;
  oldIdCardMother?: string;
  idCardFather?: string;
  oldIdCardFather?: string;

  oldPhoto?: string;
  oldFamilyCard?: string;
  nationality: string;
  fullName: string;
  placeOfBirth: string;
  dob: Dayjs;
  regisDate: Dayjs;
  gender: string;
  religion: string;
  unit: string;
  houseAddress: string;
  distance: string;
  languages: string;
  goingToShoolBy: string;
  status: string;
  nisn?: string;
  oldSchoolName?: string;
  oldSchoolAddress?: string;
}

export interface FormChildInterest {
  preschoolName: string;
  preschoolyear: string;
  preschoolAddress: string;

  primaryName: string;
  primaryyear: string;
  primaryAddress: string;

  othersName: string;
  othersyear: string;
  othersAddress: string;

  arts: string;
  music: string;
  cognitive: string;
  sport: string;
  organization: string;
  others: string;
}

export interface FormParentType {
  id: number;

  fullName_father: string;
  placeOfBirth_father: string;
  dob_father: Dayjs;
  religion_father: string;
  relationWithChild_father: string;
  maritalStatus_father: string;
  theChildLivesWith_father: string;
  nationality_father: string;
  officeAddress_father: string;
  idType_father: string;
  idNumber_father: string;
  phoneNumber_father: string;
  nameInstitution_father: string;
  occupationPosition_father: string;
  email_father: string;
  city_father: string;
  lastEducation_father: string;
  universityName_father: string;
  postalCode_father: string;
  address_father: string;

  fullName_mother: string;
  placeOfBirth_mother: string;
  dob_mother: Dayjs;
  religion_mother: string;
  relationWithChild_mother: string;
  maritalStatus_mother: string;
  theChildLivesWith_mother: string;
  nationality_mother: string;
  officeAddress_mother: string;
  idType_mother: string;
  idNumber_mother: string;
  phoneNumber_mother: string;
  nameInstitution_mother: string;
  occupationPosition_mother: string;
  email_mother: string;
  city_mother: string;
  lastEducation_mother: string;
  universityName_mother: string;
  postalCode_mother: string;
  address_mother: string;
}

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
