import dayjs from "dayjs";

export function dMY(v: any) {
  if (!dayjs(v).isValid()) {
    return "";
  }

  return dayjs(v).format("DD MMM YYYY");
}

export function isDate(value: any) {
  return dayjs(value).isValid();
}
