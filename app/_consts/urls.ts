const employee = "/hrd/employee";
const department = "/master/department";

export const urls = {
  root: "/",
  hrd: {
    employee: {
      index: employee,
      create: employee + "/create",
    },
  },
  master: {
    department: {
      index: department,
      create: department + "/create",
    },
  },
};
