import type { Options } from "@/types";

export function selectOptions<T>(
  arr: any = [],
  labelKey: keyof T,
  valueKey: keyof T
): Options {
  return arr.map((row: T) => {
    const vKey = String(valueKey).split("|");

    const value = vKey
      .map((k) => {
        // @ts-expect-error asd
        return row?.[k];
      })
      .join("|");

    return {
      label: row[labelKey],
      value,
    };
  });
}
