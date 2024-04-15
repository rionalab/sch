export function c(number: any = 0) {
  const v = Number(number) || 0;

  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(v);

  return formattedAmount;
}

export function isNumber(value: any) {
  return typeof value === "number" && !isNaN(value);
}
