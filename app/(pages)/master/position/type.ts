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
