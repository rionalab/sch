export const messages = {
  updateSuccess: "Data has been updated successfully",
  fieldIsRequired: (label?: string) =>
    label ? "Please input your " + label : "Field value is required",
  retryLater: "Please try again later or contact admin",
  dataIsInvalid: "Data is Invalid",
  somethingWentWrong: "Something Went Wrong",
  deleteError: "Fail to delete data",
  dataAlreadyUsed: (label: string) => label + " is already used",
  dataAlreadyExist: "Data is already exist",
  maxNCharacters: (n: number) =>
    `Max input is ${n} character${n > 1 ? "s" : ""}`,
};
