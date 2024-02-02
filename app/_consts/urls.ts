const employee = "/hrd/employee";
const department = "/master/department";
const position = "/master/position";
const vendor = "/master/vendor";

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
    vendor: {
      index: vendor,
      create: vendor + "/create",
      edit: (id: string | number) => vendor + "/edit/" + id,
    },
  },
};
