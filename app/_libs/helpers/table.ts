export function normalizeTableRow<T>(data: T[]): T[] {
  return data.map((d, i) => ({
    ...d,
    no: i + 1,
    key: i,
  }));
}

export function cell(text?: string | null, replacer: string = "-") {
  return text ?? replacer;
}

export function cellPositionCategory(v: "Edu" | "NonEdu") {
  return v === "Edu" ? "Education" : "Non Education";
}
