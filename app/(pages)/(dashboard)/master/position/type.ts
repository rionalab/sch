export interface Position {
  id: number;
  name: string;
}

export interface FormFields {
  name: string;
  category: "Edu" | "NonEdu";
  id?: string;
  code: string;
  description: string;
  active: boolean;
}
