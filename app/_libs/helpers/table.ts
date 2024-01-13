export function tableData<T>(data: T[]): T[] {
  return data.map((d, i) => ({
    ...d,
    no: i + 1,
    key: i,
  }));
}

export function cell(text: string, replacer: string = "-") {
  return text || replacer;
}
