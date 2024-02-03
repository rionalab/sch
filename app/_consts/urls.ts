const employee = "/hrd/employee";
const department = "/master/department";
const position = "/master/position";
const vendor = "/master/vendor";
const inventory = "/master/inventory";
const uom = "/master/uom";
const extracurricular = "/master/extracurricular";

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
      edit: (id: string | number) => department + "/edit/" + id,
    },
    inventory: {
      index: inventory,
      create: inventory + "/create",
      edit: (id: string | number) => inventory + "/edit/" + id,
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
    uom: {
      index: uom,
      create: uom + "/create",
      edit: (id: string | number) => uom + "/edit/" + id,
    },
    extracurricular: {
      index: extracurricular,
      create: extracurricular + "/create",
      edit: (id: string | number) => extracurricular + "/edit/" + id,
    },
  },
};
