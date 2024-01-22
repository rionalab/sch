const employee = "/hrd/employee";
const department = "/master/department";
const position = "/master/position";

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
    position: {
      index: position,
      create: position + "/create",
      edit: (id: string | number) => position + "/edit/" + id,
    },
  },
};
