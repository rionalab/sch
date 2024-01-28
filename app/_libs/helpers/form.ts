export function selectOptions<T>(
  arr: any,
  labelKey: keyof T,
  valueKey: keyof T
) {
  return arr.map((row: T) => ({
    label: row[labelKey],
    value: row[valueKey],
  }));
}
