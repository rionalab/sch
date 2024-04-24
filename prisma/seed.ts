import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

const generateAction = (key: string) => {
  return [`role_${key}_view`, `role_edit_${key}`, `role_create_${key}`].join(
    ", ",
  );
};

const remarks =
  "If the above palettes do not meet your needs, you can choose a main color below, and Ant Design's color generation algorithm will generate a palette for you.";

const actions = `menu_master, menu_account, menu_staff, menu_hr, menu_superadmin, menu_role, menu_edit_roles,  
  ${generateAction("employee")},  
  ${generateAction("uom")},  
  ${generateAction("user")},  
  ${generateAction("leave")},  
  ${generateAction("vendor")},  
  ${generateAction("position")},  
  ${generateAction("workUnit")},  
  ${generateAction("inventory")},  
  ${generateAction("leaveType")},  
  ${generateAction("department")},  
  ${generateAction("leaveRequest")},  
  ${generateAction("purchaseRequest")},  
  ${generateAction("extracurricular")},  
  menu_updatePassword, menu_help, menu_documentation`;

const generateCrudRole = (key: string) => {
  return [
    `role_${key}_view`,
    `role_${key}_edit`,
    `role_${key}_create`,
    `role_${key}_delete`,
  ].join(", ");
};

const actionsNew = `
${generateCrudRole("ao_admission")},
${generateCrudRole("marketing_form")},
role_admin,role_admin_role,role_admin_role_view,role_admin_role_create,role_admin_role_edit,role_admin_role_delete,role_account_password_view,role_account,role_hr_employee,role_hr_employee_view,role_hr_employee_create,role_hr_employee_edit,role_hr_employee_delete,role_hr,role_staff_leave_request,role_staff_leave_request_view,role_staff_leave_request_create,role_staff_leave_request_edit,role_staff_leave_request_delete,role_staff_purchase_view,role_staff_purchase_create,role_staff_purchase_edit,role_staff_purchase_delete,role_master,role_master_supplier,role_master_department,role_master_uom,role_master_inventory,role_master_position,role_master_student_act,role_master_work_unit,role_master_leave_type,role_master_user,role_master_supplier_view,role_master_supplier_create,role_master_supplier_edit,role_master_supplier_delete,role_master_department_view,role_master_department_create,role_master_department_edit,role_master_department_delete,role_master_uom_view,role_master_uom_create,role_master_uom_edit,role_master_uom_delete,role_master_inventory_view,role_master_inventory_create,role_master_inventory_edit,role_master_inventory_delete,role_master_position_view,role_master_position_create,role_master_position_edit,role_master_position_delete,role_master_student_act_view,role_master_student_act_create,role_master_student_act_edit,role_master_student_act_delete,role_master_work_unit_view,role_master_work_unit_create,role_master_work_unit_edit,role_master_work_unit_delete,role_master_leave_type_view,role_master_leave_type_create,role_master_leave_type_edit,role_master_leave_type_delete,role_master_user_view,role_master_user_create,role_master_user_edit,role_master_user_delete`;

const actionsStaff = actions
  .split(",")
  .map((action) => {
    const cleanAction = action.trim();

    const blacklist = ["menu_user", "menu_edit_user", "menu_create_user"];

    if (blacklist.includes(cleanAction)) {
      return null;
    }

    return cleanAction;
  })
  .filter(Boolean)
  .join(", ");

function today() {
  return dayjs();
}

function tomorrow() {
  return dayjs().add(1, "day");
}

const prisma = new PrismaClient();

async function main() {
  console.log(`############################`);
  console.log(`Start seeding ...`);

  // cleaning
  await prisma.employee.deleteMany();

  // * RoleAction
  // *************************************
  await prisma.roleAction.createMany({
    data: [
      {
        label: "Super Admin",
        name: "Superadmin",
        actions: actionsNew,
      },
      { label: "Administrator", name: "Administrator", actions: actionsNew },
      { label: "Chairman", name: "Chairman", actions: actionsNew },
      {
        label: "Manager School",
        name: "ManagerSchool",
        actions: actionsNew,
      },
      { label: "Principal", name: "Principal", actions },
      { label: "Teacher", name: "Teacher", actions },
      {
        label: "Manager Finance",
        name: "ManagerFinance",
        actions: actionsNew,
      },
      { label: "Staff Finance", name: "StaffFinance", actions },
      {
        label: "Manager Marketing",
        name: "ManagerMarketing",
        actions: actionsNew,
      },
      { label: "Staff Marketing", name: "StaffMarketing", actions },
      {
        actions: actionsNew,
        label: "Manager General Affair",
        name: "ManagerGeneralAffair",
      },
      {
        label: "Staff General Affair",
        name: "StaffGeneralAffair",
        actions: actionsStaff,
      },
      { label: "Modul Purchasing", name: "ModulPurchasing", actions },
      { label: "Manager Purchasing", name: "ManagerPurchasing", actions },
      { label: "Staff Purchasing", name: "StaffPurchasing", actions },
      { label: "Modul Human Resource", name: "ModulHumanResource", actions },
      { label: "Manager HRD", name: "ManagerHRD", actions },
      { label: "Staff HRD", name: "StaffHRD", actions },
      { label: "Manager IT", name: "ManagerIT", actions: actionsNew },
      { label: "Staff IT", name: "StaffIT", actions: actionsStaff },
      { label: "Parent", name: "Parent", actions },
    ],
    skipDuplicates: true,
  });
  const roles = await prisma.roleAction.findMany();

  // * Department
  // *************************************
  await prisma.department.createMany({
    data: [
      {
        code: "none",
        name: "None",
        description: "none",
        active: true,
        budget: 0,
      },
      {
        code: "TI",
        name: "TI",
        description: "TI",
        budget: 20000000,
        active: true,
      },
      {
        code: "GA",
        name: "GA",
        description: "General Affair",
        budget: 30000000,
        active: true,
      },
    ],
    skipDuplicates: true,
  });
  const department = await prisma.department.findMany();
  // console.log(department);

  // * User
  // *************************************
  await prisma.user.createMany({
    data: [
      {
        email: "admin@kr.com",
        password: await bcrypt.hash("admin1234", 10),
        roleId: 1,
        hasUpdatePassword: true,
        departmentId: department.find((r) => r.code === "TI")?.id ?? 1,
        name: "User Admin",
      },
      {
        email: "staff_it@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        departmentId: department.find((r) => r.code === "TI")?.id ?? 1,
        roleId: roles.find((r) => r.name === "StaffIT")?.id ?? 1,
        name: "User Staff IT",
      },
      {
        email: "manager_it@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        departmentId: department.find((r) => r.code === "TI")?.id ?? 1,
        roleId: roles.find((r) => r.name === "ManagerIT")?.id ?? 1,
        name: "User Manager IT",
      },
      {
        email: "staff_ga@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        departmentId: department.find((r) => r.code === "GA")?.id ?? 1,
        roleId: roles.find((r) => r.name === "StaffGeneralAffair")?.id ?? 1,
        name: "User Staff GA",
      },
      {
        email: "manager_ga@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        departmentId: department.find((r) => r.code === "GA")?.id ?? 1,
        roleId: roles.find((r) => r.name === "ManagerGeneralAffair")?.id ?? 1,
        name: "User Manager GA",
      },
      {
        email: "user5@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        departmentId: department[0].id,
        roleId: 1,
        name: "User User 5",
      },
    ],
    skipDuplicates: true,
  });

  const users = await prisma.user.findMany();
  // console.log("users", users);

  // * Position
  // *************************************
  await prisma.position.createMany({
    data: [
      {
        description: "",
        active: true,
        name: "principal",
        category: "Edu",
        code: "KR/POS/2024/01/0001",
      },
      {
        name: "teacher",
        category: "Edu",
        active: true,
        description: "",
        code: "KR/POS/2024/01/0002",
      },
      {
        name: "security",
        active: true,
        code: "KR/POS/2024/01/0003",
        category: "NonEdu",
        description: "",
      },
      {
        name: "cleaning",
        description: "",
        active: true,
        code: "KR/POS/2024/01/0004",
        category: "NonEdu",
      },
    ],
    skipDuplicates: true,
  });
  const positions = (await prisma.position.findMany()).map((item) => item.id);

  // * Employee
  // *************************************
  const employeeRest = {
    tribe: "",
    positionId: positions[0],
    hireDate: today().format(),
    placeOfBirth: faker.location.city(),
  };
  await prisma.employee.createMany({
    // data: employeeSeed.map((row) => ({
    //   PKWTEnd: today,
    //   positionId: 1,
    //   userId: 1,
    //   ...row,
    //   gender: row.gender,
    // })),
    data: [
      {
        fullName: "Rika Anggraeni",
        photo: "",
        bloodType: "A",
        unit: "Primary",
        NIP: "1000000001",
        NIK: "1371131301910002",
        dob: dayjs("7/2/84").format(),
        maritalStatus: "Married",
        TMT: today().format(),
        remarks: "",
        PKWTStart: today().format(),
        PKWTEnd: tomorrow().format(),
        // position: {
        //   connect: { id: 1 },
        // },
        gender: "Female",
        religion: "Islam",
        idAddress:
          "Jalan Bintara 7 No. 60, RT/RW. 001/002, Bintara, Bekasi Barat 17134",
        houseAddress: "-",
        email: "reecabloo@gmail.com",
        phone1: "089677356148",
        phone2: "-",
        familyPhone: "088211539345",
        degree: "S1",
        institution: "UNAS",
        major: "Hubungan Internasional",
        fatherName: "Sutristo",
        motherName: "Any Ramdano",
        siblingName: "Edy Susanto",
        spouseName: "Budi Hartono",
        contractStatus: "Active",
        childrenName: "Ahmad Agha",
        ...employeeRest,
      },
      {
        photo: "",
        bloodType: "A",
        fullName: "Ramadhan Prasetyo",
        unit: "Managemen",
        NIP: "1000000002",
        NIK: "1371121301910002",
        dob: dayjs("2/27/94").format(),
        maritalStatus: "Married",
        gender: "Male",
        religion: "Islam",
        idAddress:
          "Jl. SPG 7 No.2 Lubang Buaya RT 007/RW 009 Jakarta Timur, 13810",
        houseAddress: "-",
        email: "ramadhan.kidsrepublic@gmail.com",
        phone1: "0812-9741-8454",
        phone2: "021-8408751",
        familyPhone: "08568204348",
        degree: "D3/D4",
        institution: "IISIP",
        major: "Komunikasi",
        fatherName: "Suhermanto",
        motherName: "Siti Aisyah",
        siblingName: "Muhammad Shiam Prayoga",
        spouseName: "Yusan Rizki Rahayu",
        childrenName: "Aaron Rizki Pratama",
        TMT: today().format(),
        PKWTStart: today().format(),
        PKWTEnd: tomorrow().format(),
        remarks: "Tidak Active tgl 28 Feb 2023",
        contractStatus: "Inactive",
        ...employeeRest,
      },
      {
        photo: "",
        bloodType: "A",
        fullName: "Syifa Fauziah",
        unit: "Managemen",
        NIP: "1000000003",
        NIK: "1371131352910002",
        dob: dayjs("6/19/92").format(),
        maritalStatus: "Married",
        gender: "Female",
        religion: "Islam",
        idAddress: "Jln Pangkalan Jati V No 59 RT 011/005 No 59",
        houseAddress: "Jln Cempaka Bulak RT 003 RW 005 No 43 unit 1B",
        email: "fauziahsyifa438@gmail.com",
        phone1: "087835728566",
        phone2: "-",
        TMT: today().format(),
        familyPhone: "087875981255",
        degree: "S1",
        institution: "STIE Swadaya",
        major: "Management",
        fatherName: "Alif Hardianto",
        motherName: "Sutarsih",
        siblingName: "Ramzy Nur Fauzan",
        spouseName: "Prade Kunto Arief Dwi Sanjaya",
        childrenName: "Daniyal Zhafran Radefa",
        PKWTStart: dayjs("9/6/2021").format(),
        PKWTEnd: dayjs("9/6/2023").format(),
        contractStatus: "Active",
        ...employeeRest,
      },
      {
        photo: "",
        bloodType: "",
        fullName: "Novia Rizky Sulaiman",
        unit: "Preschool & Kindergarten",
        NIP: "1000000004",
        NIK: "1371131301510002",
        email: "noviarizkysulaiman@gmail.com",
        dob: dayjs("2/5/93").format(),
        maritalStatus: "Married",
        gender: "Female",
        religion: "Islam",
        idAddress:
          "Jl. Raya Ragunan, Gang Mawar, Pasar Minggu, Rt. 012/03, Jakarta Selatan - 12520",
        houseAddress:
          "Jl. Masjid Jami Nurul Huda, Kampung Babakan, Desa Tahurhalang, Kabupaten Bogor - 16320",
        phone1: "081295148764",
        phone2: "-",
        familyPhone: "081380385411",
        degree: "S1",
        institution: "Universitas Indraprasta PGRI",
        major: "Pendidikan Bahasa Inggris",
        fatherName: "Alm. Idup Sulaiman",
        motherName: "Rukaya Lantong",
        siblingName: "Noval Sulaeman & Siti Azizah Sulaiman",
        spouseName: "Perri Hanto",
        childrenName: "Azzam Aulia Shakeil",
        TMT: dayjs("10/1/21").format(),
        PKWTStart: today().format(),
        PKWTEnd: tomorrow().format(),
        contractStatus: "Active",
        ...employeeRest,
      },
      {
        photo: "",
        bloodType: "",
        fullName: "Ratih Puspitasari",
        unit: "Preschool & Kindergarten",
        NIP: "1000000005",
        NIK: "1374431301910002",
        dob: dayjs("11/28/86").format(),
        maritalStatus: "Married",
        gender: "Female",
        religion: "Islam",
        idAddress: "Jl. Sambisari A.260, Duta Kranji, Bintara - Bekasi Barat",
        houseAddress: "-",
        email: "ra.puspitasari@gmail.com",
        phone1: "081291418642",
        phone2: "Tidak ada",
        familyPhone: "081291418643",
        degree: "S1",
        institution: "UI",
        major: "Ilmu Kesejahteraan Sosial",
        fatherName: "Hidayat Effendi",
        motherName: "Sofiah Muchtar",
        siblingName: "Astri Lestari dan M. Wildan Fadhilah",
        spouseName: "Galih Sendika Artistya",
        childrenName: "M. Ammar Artistya",
        PKWTStart: dayjs("10/23/2015").format(),
        PKWTEnd: dayjs("10/23/2017").format(),
        TMT: dayjs("1/8/18").format(),
        contractStatus: "Active",
        ...employeeRest,
      },
      {
        photo: "",
        bloodType: "",
        fullName: "Kartika Nur April",
        unit: "Preschool & Kindergarten",
        NIP: "1000000006",
        NIK: "1371131301977002",
        dob: dayjs("4/6/82").format(),
        maritalStatus: "Separated",
        gender: "Female",
        religion: "Islam",
        idAddress: "Komplek Masnaga Bintara Jaya",
        houseAddress:
          "Kp. Setu Bintara Jaya Rt. 04/Rw. 01 No. 88. Bintara Jaya. Bekasi Barat  ",
        email: "baningbaning12@gmail.com",
        phone1: "081218024114",
        phone2: "-",
        familyPhone: "081283764943",
        degree: "S1",
        institution: "Universitas Krisnadwipayana",
        major: "Jurusan Administrasi Niaga",
        fatherName: "Warkim",
        motherName: "Ningsih",
        siblingName: "Romadona",
        spouseName: "-",
        childrenName: "Banyu Baning Putera Nugraha",
        TMT: dayjs("7/5/21").format(),
        PKWTStart: dayjs("7/5/2021").format(),
        PKWTEnd: dayjs("7/5/2023").format(),
        contractStatus: "Active",
        ...employeeRest,
      },
    ],

    skipDuplicates: true,
  });

  // * VEndor
  // *************************************
  await prisma.vendor.createMany({
    data: [
      {
        name: "Vendor1",
        code: "KR/SPP/2024/01/00001",
        accountNo: "1111111111",
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
        fax: faker.phone.number(),
        remarks: "",
        blacklist: false,
      },
      {
        name: "Vendor2",
        code: "KR/SPP/2024/01/00002",
        accountNo: "222222222",
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
        fax: faker.phone.number(),
        remarks: "",
        blacklist: false,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.uom.createMany({
    data: [
      {
        code: "PEN",
        name: "Pen",
        acronym: "bh",
        description: "",
        active: true,
      },
      {
        code: "KG",
        name: "kg",
        description: "",
        acronym: "kg",
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.documents.createMany({
    data: [
      {
        name: "New Student Admisssion",
        type: "parent",
        fileName: "admission.pdf",
        isPaid: true,
        price: 100000,
        remarks: "remarks New Student Admisssion",
      },
      {
        name: "Promotion",
        type: "website",
        fileName: "promotion.pdf",
        isPaid: false,
        price: 0,
        remarks: "remarks Promotion",
      },
    ],
    skipDuplicates: true,
  });

  // * Inventory
  // *************************************
  await prisma.inventory.createMany({
    data: [
      {
        name: "Cat dinding",
        code: "CAT",
        uomId: 2,
        departmentId: department[0].id,
        remarks: "",
        qty: 110,
        category: "inventory",
      },
      {
        name: "Book",
        code: "BOOK",
        uomId: 1,
        departmentId: department[0].id,
        remarks: "",
        qty: 110,
        category: "inventory",
      },
    ],
    skipDuplicates: true,
  });
  const inventories = await prisma.inventory.findMany();

  // * Purchase Request
  // *************************************
  // await prisma.purchaseRequest.createMany({
  //   data: [
  //     {
  //       code: "KR/PR/2024/01/00001",
  //       payment: "cash",
  //       purchaseDate: today().format(),
  //       deliveryDate: today().format(),
  //       remarks,
  //       status: "pending",
  //       requesterId: users[0].id,
  //       approverId: users[1].id,
  //       active: true,
  //     },
  //     {
  //       code: "KR/PR/2024/01/00002",
  //       payment: "cash",
  //       purchaseDate: today().format(),
  //       deliveryDate: today().format(),
  //       remarks,
  //       status: "pending",
  //       requesterId: users[0].id,
  //       approverId: users[1].id,
  //       active: true,
  //     },
  //   ],
  //   skipDuplicates: true,
  // });

  // const pr = await prisma.purchaseRequest.findMany();

  // * Purchase Request Item
  // *************************************
  // const purchaseRequestItemsData = [
  //   {
  //     purchaseRequestId: pr[0].id,
  //     quantity: 2,
  //     inventoryId: inventories[0].id,
  //     unitPrice: 10.0,
  //     totalPrice: 20.0,
  //     remarks: "Sample item remarks 1",
  //   },
  //   {
  //     purchaseRequestId: pr[0].id,
  //     quantity: 3,
  //     inventoryId: inventories[0].id,
  //     unitPrice: 15.0,
  //     totalPrice: 45.0,
  //     remarks: "Sample item remarks 2",
  //   },
  //   // Add more Purchase Request Items as needed
  // ];

  // // Create Purchase Request Items
  // await prisma.purchaseRequestItem.createMany({
  //   data: purchaseRequestItemsData,
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
