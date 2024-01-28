export const messages = {
  fieldIsRequired: (label?: string) =>
    label ? "Please input your " + label : "Field value is required",
  retryLater: "Please try again later or contact admin",
  dataIsInvalid: "Data is Invalid",
  somethingWentWrong: "Something Went Wrong",
  dataAlreadyExist: "Data is already exist",
  maxNCharacters: (n: number) =>
    `Max input is ${n} character${n > 1 ? "s" : ""}`,
};
