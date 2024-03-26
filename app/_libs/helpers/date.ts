import dayjs from "dayjs";

export function dMY(v: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (!dayjs(v).isValid()) {
    return "";
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return dayjs(v).format("DD MMM YYYY");
}

export function dMYHis(v: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (!dayjs(v).isValid()) {
    return "";
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return dayjs(v).format("DD MMM YYYY HH:m:s");
}
export function isDate(value: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return dayjs(value).isValid();
}

export function today() {
  return dayjs();
}

export function tomorrow() {
  return dayjs().add(1, "day");
}

export const datePickerDisablePast = (current: dayjs.Dayjs) => {
  return current && current < dayjs().startOf("day");
};
