const employee = "/hrd/employee";
const department = "/master/department";
const position = "/master/position";
const vendor = "/master/vendor";
const inventory = "/master/inventory";
const uom = "/master/uom";
const studentActivities = "/master/student-activities";
const workUnit = "/master/work-unit";
const leave = "/master/leave";
const permissionLeave = "/hrd/permission-leave";
const staffLeaveRequest = "/staff/leave-request";
const user = "/master/user";
const role = "/superadmin/role";

export const urls = {
  root: "/",
  landingPage: "/dashboard",
  help: "/help",
  documentation: "/documentation",
  auth: {
    signin: "/signin",
    signout: "/signout",
  },
  hrd: {
    employee: {
      index: employee,
      create: employee + "/create",
    },
    permissionLeave: {
      index: permissionLeave,
      create: permissionLeave + "/create",
    },
  },
  staff: {
    leaveRequest: {
      index: staffLeaveRequest,
      create: staffLeaveRequest + "/create",
      edit: (id: string | number) => staffLeaveRequest + "/edit/" + id,
    },
  },
  master: {
    user: {
      index: user,
      create: user + "/create",
      edit: (id: string | number) => user + "/edit/" + id,
    },
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
    studentActivities: {
      index: studentActivities,
      create: studentActivities + "/create",
      edit: (id: string | number) => studentActivities + "/edit/" + id,
    },
    workUnit: {
      index: workUnit,
      create: workUnit + "/create",
      edit: (id: string | number) => workUnit + "/edit/" + id,
    },
    leave: {
      index: leave,
      create: leave + "/create",
      edit: (id: string | number) => leave + "/edit/" + id,
    },
  },
  superadmin: {
    role: {
      index: role,
      create: role + "/create",
      edit: (id: string | number) => role + "/edit/" + id,
    },
  },
  account: {
    updatePassword: { index: "/account/update-password" },
  },
};
