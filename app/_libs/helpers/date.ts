import dayjs from "dayjs";

export function dMY(v: any) {
  if (!dayjs(v).isValid()) {
    return "";
  }

  return dayjs(v).format("DD MMM YYYY");
}

export function dMYHis(v: any) {
  if (!dayjs(v).isValid()) {
    return "";
  }

  return dayjs(v).format("DD MMM YYYY HH:m:s");
}

export function dMYtoDayJs(dateString: string) {
  const formatDateString = "DD MMM YYYY";
  return dayjs(dateString, formatDateString);
}

export function HMA(v: any) {
  if (!dayjs(v).isValid()) {
    return "";
  }

  return dayjs(v).format("HH:mm");
}

export function isDate(value: any) {
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
