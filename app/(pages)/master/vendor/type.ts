export interface Position {
  id: number;
  name: string;
  category: "Edu" | "NonEdu";
}

export interface Store {
  name: string;
  id?: string;
  category: "Edu" | "NonEdu";
}

export interface VendorFields {
  id?: string;
  name: string;
  accountNo: string;
  address: string;
  phone: string;
  blacklist: boolean;
  remarks?: string;
}
